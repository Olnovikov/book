import { HttpClient } from '@angular/common/http';
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
  constructor(public http: HttpClient, public router: Router,) { }
  getProfile() {
    this.http.get<User>('/api/auth/profile').subscribe((res) => {
      if (res) {
        this.setUser(res)
        this.router.navigate(['list']);
      } else {
        localStorage.removeItem('access_token')
        alert('Неверный логин или пароль');
      }
    });
  }
  setUser(user: User | null) {
    this.userSubject.next(user)
  }
  getUserValue() {

    return this.userSubject.getValue()
  }
  getUsername() {
    return this.userSubject.getValue()?.username
  }
}
