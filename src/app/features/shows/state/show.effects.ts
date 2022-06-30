import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { ShowsService } from '../services/shows.service';
import * as showActions from "./show.actions";

@Injectable()
export class ShowEffects {

  loadShows$ = createEffect(() => this.actions$.pipe(
    ofType(showActions.LoadShow.type),
    mergeMap(() => this.showService.populateShows()
      .pipe(
        map(shows => ({ type: showActions.LoadShowSuccess.type, shows })),
        catchError(() => of({ type: showActions.LoadShowFailure.type, payload: {
            shows: []
        } }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private showService: ShowsService
  ) {}
}
