import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../../interfaces/customer.interface';
import { CustomerService } from '../../services/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.less']
})
export class CustomerDashboardComponent implements OnInit {
  form!: FormGroup;
  customers: ICustomer[] = [];

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private routes: Router,
    private customerService: CustomerService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      isprime: ['']
    });
    this.customerService.getCustomer(Number(localStorage.getItem('id'))).subscribe( customer => {
      this.form = this.formBuilder.group({
        name: [customer.name, Validators.required],
        email: [customer.email, [Validators.required, Validators.email]],
        isprime: [customer.isPrime]
      });
    });
    // this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers()
    .subscribe(customers => this.customers = customers);
  }

  updatePrimeStatus(){
    localStorage.setItem('isprime', String(this.form.controls['isprime'].value))
  }
}
