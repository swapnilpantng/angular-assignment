import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.less']
})
export class CustomerLoginComponent implements OnInit {

  constructor(private customerService: CustomerService, private routes: Router) { }
  msg!: string;
  username!: string;
  password!: string;
  showSpinner!: boolean;

  ngOnInit(): void {
  }

  check(username: string, passowrd: string) {
    var output = this.customerService.checkUserNameAndPassword(username, passowrd);
    if (output) {
      this.routes.navigate(['/shows']);
    }
    else {
      this.msg = "Invalid Username or Password"
    }
  }

  checkLogin() {
    this.showSpinner = true;
    var output = this.customerService.checkUserNameAndPassword(this.username, this.password);
    if (output) {
      this.routes.navigate(['/shows']);
    }
    else {
      this.msg = "Invalid Username or Password"
    }
    this.showSpinner = false;
  }
}
