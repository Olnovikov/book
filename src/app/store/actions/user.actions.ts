import { Action } from "@ngrx/store";

export enum EUserActions {

  Login='[User] login',
  LoginSuccess='[User] loginSuccess'
}

export class Login implements Action{
  public readonly type: EUserActions.Login
  constructor(public payload: any){}
}

export class LoginSuccess implements Action{
  public readonly type: EUserActions.LoginSuccess
  constructor(public payload:any){}
}


export type UserActions=Login|LoginSuccess
