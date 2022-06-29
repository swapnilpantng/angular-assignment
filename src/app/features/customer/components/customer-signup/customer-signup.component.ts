import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ICustomer } from '../../interfaces/customer.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.less']
})
export class CustomerSignupComponent implements OnInit {
  gender!: string;
  loading = false;
  submitted = false;
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private routes: Router,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      isprime: ['']
    });
  }

  get f() { return this.form.controls; }

  register() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    const customer = this.form.value as ICustomer;

    this.customerService.register(customer).subscribe(response => {
      this.customerService.log(`Registration successful with id:${response.id}`);
      this.customerService.log(`Welcome ${response.name}`);
      this.customerService.setSession(response);
      this.customerService.getCustomers().subscribe(customer => {
        console.log(customer)
      })
      this.routes.navigate(['/'])
    },
      error => {
        this.customerService.log(error);
        this.loading = false;
      });
  }
}
