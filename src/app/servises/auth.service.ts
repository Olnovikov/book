import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { UserService } from '../stores/user.store';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: string | null = localStorage.getItem('access_token');
  constructor(
    public router: Router,
    public UserStore: UserService,
    public ApiService: ApiService
  ) { }
  login(login: string, password: string) {
    this.ApiService.getTokenApi(login, password)
      .subscribe((res: any) => {
        this.token = res.access_token;
        localStorage.setItem('access_token', res.access_token);
        this.router.navigate(['list'])
      },

      );

  }
  logout() {
    this.UserStore.setUser(null)
    this.token = null
    localStorage.removeItem('access_token')
    this.router.navigate(['auth'])
  }


}
