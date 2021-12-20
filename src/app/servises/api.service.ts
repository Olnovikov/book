import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { User } from '../interfaces/user';
import { UserService } from '../stores/user.store';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    public http: HttpClient,
    public UserStore: UserService,
    public AuthService: AuthService,
    private toastr: ToastrService,
    public router: Router
  ) {}
  getTokenApi(login: string, password: string) {
    return this.http
      .post('/api/auth/login', { login: login, password: password })
      .pipe(
        catchError((err) => {
          if (err.status == 401) {
            this.toastr.warning('неверный логин или пароль');
          }
          return [];
        })
      )
      .subscribe((res: any) => {
        this.AuthService.token = res.access_token;
        localStorage.setItem('access_token', res.access_token);
        this.router.navigate(['list']);
      });
  }
  getProfileApi() {
    this.http.get<User>('/api/auth/profile').subscribe((res) => {
      this.UserStore.setUser(res);
    });
  }
}
