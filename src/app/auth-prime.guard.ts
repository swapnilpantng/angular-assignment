import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MessageService } from './shared/messages/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthPrimeGuard implements CanActivate {

  constructor(private routes: Router, private messageService: MessageService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    boolean {
    if (localStorage.getItem('user') != null) {
      if (localStorage.getItem('isprime') != null && localStorage.getItem('isprime') == 'true') {
        return true;
      }
      else {
        this.messageService.add('core.no-prime-message');
        return false;
      }
    }
    else {
      this.messageService.add('core.no-login');
      return false;
    }
  }
}
