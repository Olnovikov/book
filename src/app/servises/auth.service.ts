import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../stores/user.store';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: string | null = localStorage.getItem('access_token');
  constructor(
    public router: Router,
    public UserStore: UserService,

  ) { }

  logout() {
    this.UserStore.setUser(null)
    this.token = null
    localStorage.removeItem('access_token')
    this.router.navigate(['auth'])
  }


}
