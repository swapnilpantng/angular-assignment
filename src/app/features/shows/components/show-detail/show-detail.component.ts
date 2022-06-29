import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IShow } from '../../interfaces/show.interface';
import { ShowsService } from '../../services/shows.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.less']
})
export class ShowDetailComponent implements OnInit {

  constructor(public showsService: ShowsService, private route: ActivatedRoute) { }
  @Input() id!: number;
  show$!: Observable<IShow>;
  ngOnInit(): void {
    this.show$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.showsService.getShow(Number(params.get('id')!)))
    );
  }

}
