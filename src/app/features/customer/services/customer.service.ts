import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'src/app/shared/messages/services/message.service';
import { ICustomer, IList } from '../interfaces/customer.interface';
import { catchError, map, tap } from 'rxjs/operators';
import { observable, Observable, of, Subject, throwError } from 'rxjs';

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
    const url = `${this.customersUrl}${id}`;
    return this.http.get<ICustomer>(url).pipe(
      catchError(this.handleError<ICustomer>(`getCustomer id=${id}`))
    );
  }

  getCurrentCustomer(): Observable<ICustomer> {
    const id = Number(localStorage.getItem('id'));
    return this.getCustomer(id);
  }

  public updateCustomer(customer: ICustomer) {
    return this.http.put<ICustomer>(`${this.customersUrl}${customer.id}`, customer)
  }

  public addCustomerShow(showname: string, type: string) {
    let currentcustomer = this.getCurrentCustomer();
    currentcustomer.subscribe(customer => {
      customer[type as keyof IList].push(showname);
      this.updateCustomer(customer).subscribe({
        error: error => {
          console.error('There was an error!', error);
        }
      });
      this.getCustomers().subscribe(customers => { console.log(customers) });
    })
  }

  public updatePrimeStatus(status: string) {
    let currentcustomer = this.getCurrentCustomer();
    currentcustomer.subscribe(customer => {
      customer.isPrime = Boolean(status);
      this.updateCustomer(customer).subscribe({
        error: error => {
          console.error('There was an error!', error);
        }
      });
      this.getCustomers().subscribe(customers => { console.log(customers) });
    })
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
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
    localStorage.setItem('id', String(customer.id));
    localStorage.setItem('user', customer.email);
    localStorage.setItem('isprime', String(customer.isPrime));
    this.loggedIn = true;
    this.logger.next(this.loggedIn);
  }

  logOut() {
    localStorage.removeItem('id');
    localStorage.removeItem('user');
    localStorage.removeItem('isprime');
    this.loggedIn = false;
    this.logger.next(this.loggedIn);
  }

  retrieveSession() {
    this.getCurrentCustomer().subscribe(customer => {
      if (customer == undefined){
        this.loggedIn = false;
        this.logger.next(this.loggedIn);
        return;
      }
      localStorage.setItem('id', String(customer.id));
      localStorage.setItem('user', customer.email);
      localStorage.setItem('isprime', String(customer.isPrime));
      this.loggedIn = true;
      this.logger.next(this.loggedIn);
    })


  }
}
