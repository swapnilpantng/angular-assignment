import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IShow } from 'src/app/features/shows/interfaces/show.interface';
import { ShowsService } from 'src/app/features/shows/services/shows.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.less']
})
export class SearchPageComponent implements OnInit {
  @Input() searchtext!: string;
  shows$!: Observable<IShow[]>;
  shows!: IShow[];

  constructor(private showsService: ShowsService, private actRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.actRoute.params.subscribe(
      (params: Params) => {
        this.getResults(params['searchtext']);
      });
  }

  getResults(searchtext: string) {
    this.shows$ = this.showsService.getShows();
    this.shows$.subscribe(shows => {
      this.shows = shows;
      this.shows$ = of(this.shows.filter(it => {
        return it.name.toLowerCase().includes(searchtext)
          || it.genre.toLowerCase().includes(searchtext)
          || it.description.toLowerCase().includes(searchtext)
          || it.title.toLowerCase().includes(searchtext);
      }))
    })
  }
}
