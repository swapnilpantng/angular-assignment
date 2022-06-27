import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { CustomerSignupComponent } from './components/customer-signup/customer-signup.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';

@NgModule({
  declarations: [
    CustomerLoginComponent,
    CustomerSignupComponent,
    CustomerDashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    CustomerLoginComponent,
    CustomerSignupComponent
  ]
})
export class CustomerModule { }
