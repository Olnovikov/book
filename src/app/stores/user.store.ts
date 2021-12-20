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
  constructor( public router: Router) { }
  getProfile(profile:Observable<User>) {
    profile.subscribe((res) => {
      this.setUser(res)
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