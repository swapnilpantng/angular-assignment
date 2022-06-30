import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { ICustomer } from '../../interfaces/customer.interface';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.less']
})
export class CustomerLoginComponent implements OnInit {

  constructor(private customerService: CustomerService, private routes: Router, private translate: TranslateService) { }
  msg!: string;
  username!: string;
  password!: string;
  showSpinner!: boolean;
  customers!: Observable<ICustomer[]>;

  ngOnInit(): void {
  }

  checkLogin() {
    var output
    this.customers = this.customerService.getCustomers();
    this.customers.subscribe(customers => {
      this.showSpinner = true;
      var shows = customers;
      output = customers.filter(it => {
        return it.email == this.username
          && it.password == this.password;
      })
      if (output.length > 0) {
        this.customerService.setSession(output[0]);
        this.translate.get('core.welcome', { loggedinuser: output[0].name }).subscribe((data: any) => {
          this.customerService.log(data);
        });
        this.routes.navigate(['/shows']);
      }
      else {
        this.msg = "Invalid Username or Password"
      }
      this.showSpinner = false;
    })
  }
}
