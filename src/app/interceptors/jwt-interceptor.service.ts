import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../stores/user.store';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  constructor(public UserService: UserService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.UserService.token) {

      request = request.clone({

        setHeaders: {
          Authorization: `Bearer ${this.UserService.token}`
        }
      });

    }

    return next.handle(request);
  }



}
