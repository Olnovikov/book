import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from '../stores/user.store';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  constructor(public UserService: UserService, private toastr: ToastrService, public router: Router) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (localStorage.getItem('access_token')) {

      request = request.clone({

        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      });

    }

    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status == 401) {
          this.router.navigate(['auth']);
          localStorage.getItem('access_token') ?
            this.toastr.warning('ваша сессия завершена,пожалуйста,авторизуйтесь повторно') :
            this.toastr.warning('неверный логин или пароль');
        }
        return [];
      })
    )
  }



}
