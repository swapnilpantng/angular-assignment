import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { IShow } from '../../interfaces/show.interface';
import { ShowsService } from '../../services/shows.service';
import { AddShowAction, LoadShow } from 'src/app/features/shows/state/show.actions';
import { Store } from '@ngrx/store';
import { ShowState } from 'src/app/features/shows/state/show.state';
import { getAllShows } from 'src/app/features/shows/state/show.selectors';
import { UpdateAllShows } from 'src/app/state/app.actions';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.less']
})
export class ShowListComponent implements OnInit {

  // public shows$ = this.getShows();
  public noOfShows = 0;

  constructor(
    public translate: TranslateService,
    private store: Store<ShowState>,
    private showsService: ShowsService) { }

  @Input() shows: Array<IShow> = [];

  ngOnInit(): void {
    this.getShows()
    // this.shows$.subscribe(allShows => {
    //   this.noOfShows = allShows.length;
    //   this.store.dispatch(UpdateAllShows({
    //     allShows
    //   }))
    // });
    // this.store.dispatch(LoadShow());
    // this.shows = [
    //   {
    //     id: 1,
    //     name: "Sample Show",
    //     title: "Amazing show",
    //     description: "Amazing show",
    //     language: "English",
    //     genre: "Shonen",
    //     rating: 4.5,
    //     image: ""
    //   }
    // ];
  }

  getShows(): void {
    this.showsService.getShows()
    .subscribe(shows => this.shows = shows);
  }
}
