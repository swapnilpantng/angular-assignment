import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ICustomer } from 'src/app/features/customer/interfaces/customer.interface';
import { IShow } from '../../features/shows/interfaces/show.interface';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const shows = [
      { id: 1, name: "Sample Show 1", title: "Amazing show", description: "Amazing show", language: "English", genre: "Shonen", rating: 4.5, image: "" },
      { id: 2, name: "Sample Show 2", title: "Great show", description: "Amazing show", language: "English", genre: "Comedy", rating: 4, image: "" },
      { id: 2, name: "Sample Show 3", title: "drama show", description: "drama show", language: "Korean", genre: "Drama", rating: 3, image: "" }
    ];
    const customers = [
      { id: 12, name: 'Dr. Nice', email: "sdasd@dsadas.com", password: "admin", isPrime: false },
      { id: 13, name: 'Bombasto', email: "sdasd@dsadas.com", password: "admin", isPrime: false },
      { id: 14, name: 'Celeritas', email: "sdasd@dsadas.com", password: "admin", isPrime: false },
      { id: 15, name: 'Magneta', email: "sdasd@dsadas.com", password: "admin", isPrime: false },
      { id: 16, name: 'RubberMan', email: "sdasd@dsadas.com", password: "admin", isPrime: false },
      { id: 17, name: 'Dynama', email: "sdasd@dsadas.com", password: "admin", isPrime: false },
      { id: 18, name: 'Dr. IQ', email: "sdasd@dsadas.com", password: "admin", isPrime: false },
      { id: 19, name: 'Magma', email: "sdasd@dsadas.com", password: "admin", isPrime: false },
      { id: 20, name: 'Tornado', email: "sdasd@dsadas.com", password: "admin", isPrime: false }
    ];
    return { shows, customers};
  }

  genShowsId(shows: IShow[]): number {
    return shows.length > 0 ? Math.max(...shows.map(show => show.id)) + 1 : 11;
  }

  genCustomerId(customers: ICustomer[]): number {
    return customers.length > 0 ? Math.max(...customers.map(customer => customer.id)) + 1 : 11;
  }

}
