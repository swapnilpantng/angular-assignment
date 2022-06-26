import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { CustomerSignupComponent } from './components/customer-signup/customer-signup.component';



@NgModule({
  declarations: [
    CustomerLoginComponent,
    CustomerSignupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
