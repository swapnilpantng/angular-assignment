import { Injectable, Input } from '@angular/core';
import { IShow } from '../interfaces/show.interface';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  @Input() shows: Array<IShow> = [];

  constructor() {
    this.populateShows();
  }

  populateShows():Observable<Array<IShow>>  {
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
          rating: 4,
          image: ""
        }
      ]);
    }
    return of(this.shows);
  }
}
