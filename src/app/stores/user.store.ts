import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { selectselectUser } from 'src/app/store/selectors/user.selectors'
import { map } from 'rxjs/operators';
import { loginSuccess } from '../store/actions/user.actions';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  // @ts-ignore
  user$: Observable<User | null> = this.store.select(selectselectUser)

  constructor(public router: Router, private store: Store) { }



  logout() {
    this.store.dispatch(loginSuccess(null))
    localStorage.removeItem('access_token')
    this.router.navigate(['auth'])
  }
}
