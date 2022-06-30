import { HttpClient } from '@angular/common/http';
import { Injectable, Input, Output } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MessageService } from 'src/app/shared/messages/services/message.service';
import { IReview } from '../interfaces/review.interface';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  @Input() @Output() reviews: Array<IReview> = [];
  private reviewsUrl = 'api/reviews';
  reviews$!: Observable<IReview[]>

  constructor( private http: HttpClient,
    private messageService: MessageService) {
  }

  getReviews(): Observable<IReview[]> {
    return this.http.get<IReview[]>(this.reviewsUrl)
      .pipe(
        catchError(this.handleError<IReview[]>('getReviews', []))
      );
  }

  getReview(showid: number): Observable<IReview[]> {
    const url = `${this.reviewsUrl}/?showid=${showid}`;
    return this.http.get<IReview[]>(url).pipe(
      catchError(this.handleError<IReview[]>(`getReview id=${showid}`))
    );
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

  public log(message: string) {
    this.messageService.add(`ReviewService: ${message}`);
  }
}
