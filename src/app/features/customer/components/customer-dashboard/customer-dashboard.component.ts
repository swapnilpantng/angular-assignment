import { Component, Input, OnInit } from '@angular/core';
import { ICustomer } from '../../interfaces/customer.interface';
import { CustomerService } from '../../services/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MessageService } from 'src/app/shared/messages/services/message.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.less']
})
export class CustomerDashboardComponent implements OnInit {
  form!: FormGroup;
  @Input() customer!: ICustomer;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private routes: Router,
    private customerService: CustomerService,
    private messageService: MessageService,
    private translateService: TranslateService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      isprime: ['']
    });
    this.customerService.getCustomer(Number(localStorage.getItem('id'))).subscribe(customer => {
      this.customer = customer
      this.form = this.formBuilder.group({
        isprime: [customer.isPrime]
      });
    });
  }

  updatePrimeStatus() {
    this.customerService.updatePrimeStatus(this.form.controls['isprime'].value);
    this.messageService.add(this.translateService.instant("prime-update"))
    localStorage.setItem('isprime', String(this.form.controls['isprime'].value))
  }
}
