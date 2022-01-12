import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { User } from "src/app/interfaces/user";
import { ApiService } from "src/app/servises/api.service";
import { UserService } from "src/app/stores/user.store";
import { EUserActions, Login, LoginSuccess} from "../actions/user.actions";

@Injectable({
  providedIn: 'root',
})
export class UserEffects{
  constructor(private actions$:Actions,public ApiService:ApiService,public UserStore:UserService){}
  @Effect()
    login$=this.actions$.pipe(
    ofType<Login>(EUserActions.Login),
    switchMap((action)=>this.ApiService.getTokenApi(action.payload.login,action.payload.password)),
    switchMap((user)=>{return of( new LoginSuccess(user))})

  )
  // .subscribe((res: any) => {
  //      this.UserStore.login(res);
  //    });

}
