import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { MessageService } from './shared/messages/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthPrimeGuard implements CanActivate {

  constructor(private routes: Router, private messageService: MessageService, private translate: TranslateService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    boolean {
    if (localStorage.getItem('user') != null && (localStorage.getItem('isprime') != null && localStorage.getItem('isprime') == 'true')) {
      return true;
    }
    else {
        this.messageService.add(this.translate.instant('core.no-prime-message'));
      return false;
    }
  }
}
