import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { User } from '../interfaces/user';
import { UserService } from '../stores/user.store';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient,public UserStore:UserService,public AuthService:AuthService) { }
  getTokenApi(login: string, password: string) {
   let token= this.http
      .post('/api/auth/login', { login: login, password: password }).pipe(
        catchError(err => {

          if (err.status == 401) {
            alert('Неверный логин или пароль')
          }
          return [];
        }
        )

      )
      this.AuthService.login(login,password,token)
  }
  getProfileApi() {
    let profile=this.http.get<User>('/api/auth/profile')
    this.UserStore.getProfile(profile)
  }
}
