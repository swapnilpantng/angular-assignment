import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.less']
})
export class CustomerSignupComponent implements OnInit {

  constructor(private routes: Router) { }
  gender!: string;

  ngOnInit(): void {
  }

  register() {
    this.routes.navigate(['/'])
  }
}
