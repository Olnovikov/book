import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, tap } from "rxjs/operators";
import { LoginHeaderComponent } from "src/app/components/login-header/login-header.component";
import { User } from "src/app/interfaces/user";
import { ApiService } from "src/app/servises/api.service";
import { UserService } from "src/app/stores/user.store";
import { login, loginSuccess } from "../actions/user.actions";


@Injectable({
  providedIn: 'root',
})
export class UserEffects {
  constructor(private actions$: Actions, public ApiService: ApiService, public UserStore: UserService, public router: Router) { }
  @Effect()
  login$ = this.actions$.pipe(
    ofType(login),
    switchMap((action) => this.ApiService.getTokenApi(action.payload.login, action.payload.password)),
    tap(
      (token) => localStorage.setItem('access_token', token.access_token)
    ),
    switchMap(() => this.ApiService.getProfileApi()),
    tap((user: User) => {
      this.UserStore.setUser(user)
      this.router.navigate(['list'])
    }),
    switchMap((user: User) => of(loginSuccess(user))),

  )







}
