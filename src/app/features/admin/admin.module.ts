import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesDashboardComponent } from './components/movies-dashboard/movies-dashboard.component';
import { SharedModule } from './../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ShowEffects } from '../shows/state/show.effects';
import { showReducer } from '../shows/state/show.reducers';

@NgModule({
  declarations: [
    MoviesDashboardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature("show", showReducer),
    EffectsModule.forFeature([ShowEffects])
  ],
  exports:[MoviesDashboardComponent]
})
export class AdminModule { }
