import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { ApiService } from '../servises/api.service';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(
    null
  );
  user$: Observable<User | null> = this.userSubject.asObservable();
  constructor(public http: HttpClient, public router: Router, public ApiService: ApiService) { }
  getProfile() {
    this.ApiService.getProfileApi().subscribe((res) => {
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
