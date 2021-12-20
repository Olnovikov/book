import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(
    null
  );
  user$: Observable<User | null> = this.userSubject.asObservable();
  token: string | null = localStorage.getItem('access_token');
  constructor(public router:Router) { }

  setUser(user: User | null) {
    this.userSubject.next(user)
  }
  getUserValue() {

    return this.userSubject.getValue()
  }
  getUsername() {
    return this.userSubject.getValue()?.username
  }

  login(tokenApi:any){
    this.token = tokenApi.access_token;
    localStorage.setItem('access_token', tokenApi.access_token);
    this.router.navigate(['list']);}

  logout() {
    this.setUser(null)
    this.token = null
    localStorage.removeItem('access_token')
    this.router.navigate(['auth'])
  }
}
