import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouteService } from '../../services/route.service'
import { CustomerService } from 'src/app/features/customer/services/customer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  title = 'angular-assignment';
  isLogin!: boolean;

  constructor(
    public translate: TranslateService,
    private breakpointObserver: BreakpointObserver,
    public routeService: RouteService,
    private customerService: CustomerService
  ) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

  }

  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
    this.customerService.isLoggedIn().subscribe(loggedIn => {
      this.isLogin = loggedIn;
    });
  }

  logout() {
    this.customerService.logOut()
    this.routeService.goto('/');
  }
}
