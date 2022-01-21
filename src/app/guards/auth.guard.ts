import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SimpleModalService } from 'ngx-simple-modal';
import { Observable } from 'rxjs';
import { NoAuthInfoComponent } from '../components/no-auth-info/no-auth-info.component';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(public router: Router, private simpleModalService: SimpleModalService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('access_token')) {
      return true
    } else {
      this.simpleModalService.addModal(NoAuthInfoComponent, {})
      return false
    }
  }

}
