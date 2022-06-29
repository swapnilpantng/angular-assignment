import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'src/app/shared/messages/services/message.service';
import { ICustomer } from '../interfaces/customer.interface';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private loggedIn = false;
  private customersUrl = 'api/customers/';
  private logger = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  public log(message: string) {
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

  isLoggedIn(): Observable<boolean> {
    return this.logger.asObservable();
  }

  register(customer: ICustomer): Observable<ICustomer> {
    return this.http.post<ICustomer>(`${this.customersUrl}`, customer).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  setSession(customer: ICustomer) {
    localStorage.setItem('user', customer.email);
    localStorage.setItem('isprime', String(customer.isPrime));
    this.loggedIn = true;
    this.logger.next(this.loggedIn);
  }

  logOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('isprime');
    this.loggedIn = false;
    this.logger.next(this.loggedIn);
  }
}
