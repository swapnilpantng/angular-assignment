import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { ShowListComponent } from './features/shows/components/show-list/show-list.component';
import { ShowComponent } from './features/shows/components/show/show.component';
import { MoviesDashboardComponent } from './features/admin/components/movies-dashboard/movies-dashboard.component';


const routes: Routes = [
  {
    path: "shows",
    component: ShowListComponent
  },
  {
    path: "admin",
    component: MoviesDashboardComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
