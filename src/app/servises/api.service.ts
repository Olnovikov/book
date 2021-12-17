import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }
  getTokenApi(login: string, password: string) {
    return this.http
      .post('/api/auth/login', { login: login, password: password }).pipe(
        catchError(err => {

          if (err.status == 401) {
            alert('Неверный логин или пароль')
          }
          return [];
        }
        )
      )
  }
  getProfileApi() {
    return this.http.get<User>('/api/auth/profile')
  }
}
