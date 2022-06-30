import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private routes: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    boolean {
    if (localStorage.getItem('user') != null && (localStorage.getItem('isprime') != null && localStorage.getItem('isprime') == 'true')) {
      return true;
    }
    else {
      this.routes.navigate(['/login']);
      return false;
    }
  }
}
