import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, tap } from "rxjs/operators";
import { User } from "src/app/interfaces/user";
import { ApiService } from "src/app/servises/api.service";
import { login, loginSuccess } from "../actions/user.actions";


@Injectable({
  providedIn: 'root',
})
export class UserEffects {
  constructor(private actions$: Actions, public ApiService: ApiService, public router: Router) { }
  @Effect()
  login$ = this.actions$.pipe(
    ofType(login),
    switchMap((action) => this.ApiService.getTokenApi(action.payload.login, action.payload.password)),
    tap(
      (token) => localStorage.setItem('access_token', token.access_token)
    ),
    switchMap(() => this.ApiService.getProfileApi()),
    tap((user: User) => {
      this.router.navigate(['list'])
    }),
    switchMap((user: User) => of(loginSuccess(user))),

  )







}
