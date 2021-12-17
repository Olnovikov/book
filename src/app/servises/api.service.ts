import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }
  getTokenApi(login: string, password: string) {
    return this.http
      .post('/api/auth/login', { login: login, password: password })
  }
  getProfileApi() {
    return this.http.get<User>('/api/auth/profile')
  }
}
