import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { ShowListComponent } from './features/shows/components/show-list/show-list.component';
import { ShowComponent } from './shared/components/show/show.component';
import { MoviesDashboardComponent } from './features/admin/components/movies-dashboard/movies-dashboard.component';
import { CustomerLoginComponent } from './features/customer/components/customer-login/customer-login.component';
import { CustomerSignupComponent } from './features/customer/components/customer-signup/customer-signup.component';
import { AuthGuard } from './auth.guard';
import { CustomerDashboardComponent } from './features/customer/components/customer-dashboard/customer-dashboard.component';
import { HomepageComponent } from './core/components/homepage/homepage.component';
import { ShowDetailComponent } from './features/shows/components/show-detail/show-detail.component';
import { SearchPageComponent } from './features/search/components/search-page/search-page.component';


const routes: Routes = [
  {
    path: "shows",
    canActivate:[AuthGuard],
    component: ShowListComponent
  },
  {
    path: "admin",
    component: MoviesDashboardComponent
  },
  {
    path: "login",
    component: CustomerLoginComponent
  },
  {
    path: "signup",
    component: CustomerSignupComponent
  },
  {
    path: "customerDashboard",
    component: CustomerDashboardComponent
  },
  {
    path: "homepage",
    component: HomepageComponent
  },
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "show-detail/:id",
    canActivate:[AuthGuard],
    component: ShowDetailComponent
  },
  {
    path: "searchpage/:searchtext",
    canActivate:[AuthGuard],
    component: SearchPageComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
