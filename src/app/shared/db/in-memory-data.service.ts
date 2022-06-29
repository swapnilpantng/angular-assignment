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
      { id: 1, name: "Thor: love and thunder", title: "Thor: love and thunder", description: "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.", language: "English", genre: "Action,Comedy,Adventure", rating: 7.8, image: "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" },
      { id: 2, name: "Jujutsu Kaisen 0: The Movie", title: "Jujutsu Kaisen 0: The Movie", description: "Yuta Okkotsu, a high schooler who gains control of an extremely powerful Cursed Spirit and gets enrolled in the Tokyo Prefectural Jujutsu High School by Jujutsu Sorcerers to help him control his power and keep an eye on him.", language: "English, Japanese", genre: "Animation,Action,Fantas y", rating: 7.9, image: "https://m.media-amazon.com/images/M/MV5BYzFmMjAwMDYtNzM0Zi00NjY2LWFjMjYtMGQ1OTRiZjk5YjJkXkEyXkFqcGdeQXVyMTMwODY5NDc2._V1_.jpg" },
      { id: 2, name: "Sample Show 3", title: "drama show", description: "drama show", language: "Korean", genre: "Drama", rating: 3, image: "https://material.angular.io/assets/img/examples/shiba2.jpg" }
    ];
    const customers = [
      { id: 12, name: 'Dr. Nice', email: "swapnil@gmail.com", password: "admin", isPrime: false },
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
