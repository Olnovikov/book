import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { loginSuccess } from 'src/app/store/actions/user.actions';
import { selectselectUser } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.scss']
})
export class LoginHeaderComponent implements OnInit {

  constructor(private store: Store, public router: Router) { }

  ngOnInit(): void {
  }
  // @ts-ignore
  user$: Observable<User | null> = this.store.select(selectselectUser)

  logout() {
    this.store.dispatch(loginSuccess(null))
    localStorage.removeItem('access_token')
    this.router.navigate(['auth'])
  }
}
