import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { IShow } from '../../interfaces/show.interface';
import { ShowsService } from '../../services/shows.service';
import { AddShowAction, LoadShow } from 'src/app/features/shows/state/show.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.less']
})
export class ShowListComponent implements OnInit {

  // public shows$ = this.getShows();
  public noOfShows = 0;

  constructor(
    private showsService: ShowsService) { }

  @Input() shows: Array<IShow> = [];

  ngOnInit(): void {
    this.getShows()
  }

  getShows(): void {
    this.showsService.getShows()
    .subscribe(shows => this.shows = shows);
  }
}
