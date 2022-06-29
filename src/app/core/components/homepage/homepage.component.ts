import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IShow } from 'src/app/features/shows/interfaces/show.interface';
import { ShowsService } from 'src/app/features/shows/services/shows.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {
  @Input() shows: Array<IShow> = [];

  constructor(private showsService: ShowsService) { }

  ngOnInit(): void {
    this.getShows()
  }

  getShows(): void {
    this.showsService.getShows()
    .subscribe(shows => this.shows = shows);
  }
}
