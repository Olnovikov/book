import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = 'https://fosius-books.herokuapp.com/auth/login';
  // token:any;
  constructor(public http: HttpClient) { }
  login(login: string, password: string) {

    this.http.post(this.api, {login:login , password: password})
    .subscribe((res: any) => {
      console.log(res)
      localStorage.setItem('auth_token', res.token);

      })

    }
}
