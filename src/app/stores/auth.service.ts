import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: any = localStorage.getItem('access_token');
  constructor(
    public http: HttpClient,
    public router: Router,
    public UserService: UserService
  ) { }
  login(login: string, password: string) {
    this.http
      .post('/api/auth/login', { login: login, password: password })
      .subscribe((res: any) => {
        this.token = res.access_token;
        localStorage.setItem('access_token', res.access_token);
        this.UserService.getProfile();
      });
  }
  logout() {
    this.UserService.setUser(null)
    this.token = null
    localStorage.removeItem('access_token')
    this.router.navigate([''])
  }
  checkToken() {
    if (!this.token) {
      this.router.navigate([''])
      alert('Авторизуйтесь для доступа к функционалу приложения')
    }
  }
}
