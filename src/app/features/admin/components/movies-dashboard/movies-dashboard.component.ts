import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouteService } from 'src/app/core/services/route.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { IShow } from 'src/app/features/shows/interfaces/show.interface';
import { AddShowAction, LoadShow } from 'src/app/features/shows/state/show.actions';
import { Store } from '@ngrx/store';
import { ShowState } from 'src/app/features/shows/state/show.state';
import { getAllShows } from 'src/app/features/shows/state/show.selectors';
import { UpdateAllShows } from 'src/app/state/app.actions';

@Component({
  selector: 'app-movies-dashboard',
  templateUrl: './movies-dashboard.component.html',
  styleUrls: ['./movies-dashboard.component.less']
})
export class MoviesDashboardComponent implements OnInit {

  formValue !: FormGroup;
  public shows$ = this.store.select(getAllShows);
  public noOfShows = 0;

  constructor(
    public translate: TranslateService,
    private formbuilder: FormBuilder,
    private store: Store<ShowState>) { }

  ngOnInit(): void {
    this.shows$.subscribe(allShows => {
      this.noOfShows = allShows.length;
      this.store.dispatch(UpdateAllShows({
        allShows
      }))
    });
    this.store.dispatch(LoadShow());
    this.formValue = this.formbuilder.group({
      id: [''],
      name: ['', Validators.required],
      title: ['', Validators.required],
      description: [''],
      rating: ['', Validators.required],
      language: ['', Validators.required],
      genre: [''],
      image: ['']
    })
  }

  addShow(content: FormGroup) {
    content.value.id = this.noOfShows+1
    this.store.dispatch(AddShowAction({
      show: content.value
    }))
    this.formValue.reset()
  }
}
