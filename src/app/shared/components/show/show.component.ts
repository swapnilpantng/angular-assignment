import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { IShow } from '../../../features/shows/interfaces/show.interface';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.less']
})
export class ShowComponent {

  @Input() show?: IShow;

  watchClick() {
    console.log("watchClick");
  }

  watchLaterClick() {
    console.log("watchLaterClick");
  }

  favoriteClick() {
    console.log("favoriteClick");
  }
}
