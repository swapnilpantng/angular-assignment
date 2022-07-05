import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MessageService } from 'src/app/shared/messages/services/message.service';
import { ICustomer } from '../../interfaces/customer.interface';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.less']
})
export class CustomerLoginComponent implements OnInit {

  constructor(private customerService: CustomerService, private routes: Router, private messageService: MessageService) { }
  msg!: string;
  username!: string;
  password!: string;
  showSpinner!: boolean;
  customers!: Observable<ICustomer[]>;

  ngOnInit(): void {
  }

  checkLogin() {
    this.showSpinner = true;
    var output
    this.customers = this.customerService.getCustomers();
    this.customers.subscribe(customers => {
      var shows = customers;
      output = customers.filter(it => {
        return it.email == this.username
          && it.password == this.password;
      })
      if (output.length > 0) {
        this.customerService.setSession(output[0]);
        this.messageService.add('core.welcome', { loggedinuser: output[0].name });
        this.routes.navigate(['/shows']);
      }
      else {
        this.messageService.add('core.invalid-credential');
      }
    this.showSpinner = false;
    })
  }
}
