import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouteService } from '../../services/route.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  title = 'angular-assignment';

  constructor(
    public translate: TranslateService,
    private breakpointObserver: BreakpointObserver,
    public routeService: RouteService
  ){
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
  }

}
