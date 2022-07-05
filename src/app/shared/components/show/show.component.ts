import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CustomerService } from 'src/app/features/customer/services/customer.service';
import { IShow } from '../../../features/shows/interfaces/show.interface';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.less']
})
export class ShowComponent {

  @Input() show?: IShow;

  constructor(private customerService: CustomerService) {
  }

  watchLaterClick() {
    this.customerService.addCustomerShow(this.show?.name || '', 'watchLater');
  }

  favoriteClick() {
    this.customerService.addCustomerShow(this.show?.name || '', 'favorite');
  }
}
