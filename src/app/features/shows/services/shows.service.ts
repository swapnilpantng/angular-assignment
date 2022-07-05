import { Injectable, Input, Output } from '@angular/core';
import { IShow } from '../interfaces/show.interface';
import { forkJoin, map, Observable, of, throwError } from 'rxjs';
import { MessageService } from 'src/app/shared/messages/services/message.service';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  @Input() @Output() shows: Array<IShow> = [];
  private showsUrl = 'api/shows';
  shows$!: Observable<IShow[]>

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }

  populateShows(): Observable<Array<IShow>> {
    if (this.shows.length < 1) {
      this.shows = ([
        {
          id: 1,
          name: "Sample Show 1",
          title: "Amazing show",
          description: "Amazing show",
          language: "English",
          genre: "Shonen",
          rating: 4.5,
          image: ""
        },
        {
          id: 2,
          name: "Sample Show 2",
          title: "Great show",
          description: "Amazing show",
          language: "English",
          genre: "Comedy",
          rating: 9,
          image: ""
        },
        {
          id: 2,
          name: "Sample Show 2",
          title: "Great show",
          description: "Amazing show",
          language: "English",
          genre: "Comedy",
          rating: 8,
          image: ""
        }
      ]);
    }
    return of(this.shows);
  }

  private log(message: string) {
    this.messageService.add(`ShowService: ${message}`);
  }

  getShows(): Observable<IShow[]> {
    return this.http.get<IShow[]>(this.showsUrl)
      .pipe(
        catchError(this.handleError<IShow[]>('getShows', []))
      );
  }

  /** GET Show by id. Will 404 if id not found */
  getShow(id: number): Observable<IShow> {
    const url = `${this.showsUrl}/${id}`;
    return this.http.get<IShow>(url).pipe(
      // tap(_ => this.log(`fetched Show id=${id}`)),
      catchError(this.handleError<IShow>(`getShow id=${id}`))
    );
  }

  createShow(show: IShow): Observable<IShow> {
    return this.http.post<IShow>(this.showsUrl, show).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.showsUrl + id);
  }
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
