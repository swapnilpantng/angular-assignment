import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'src/app/shared/messages/services/message.service';
import { ICustomer } from '../interfaces/customer.interface';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private customersUrl = 'api/customers/';

  checkUserNameAndPassword(username: string, password: string) {
    if (username == "admin" && password == "admin") {
      localStorage.setItem('user', "swapnil");
      return true;
    }
    else {
      return false;
    }
  }

  private log(message: string) {
    this.messageService.add(`CustomerService: ${message}`);
  }

  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.customersUrl)
      .pipe(
        catchError(this.handleError<ICustomer[]>('getCustomers', []))
      );
  }

  /** GET Customer by id. Will 404 if id not found */
  getCustomer(id: number): Observable<ICustomer> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.get<ICustomer>(url).pipe(
      tap(_ => this.log(`fetched Customer id=${id}`)),
      catchError(this.handleError<ICustomer>(`getCustomer id=${id}`))
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

  searchCustomers(term: string): Observable<ICustomer[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<ICustomer[]>(`${this.customersUrl}/?name=${term}&email=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found customer matching "${term}"`) :
         this.log(`no customer matching "${term}"`)),
      catchError(this.handleError<ICustomer[]>('searchCustomers', []))
    );
  }
}
