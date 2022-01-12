import { createReducer, on } from "@ngrx/store";
import {  LoginSuccess,  } from "../actions/user.actions";
import { initialUserState, UserState } from "../state/user.state";

  
export const userReducers=createReducer(
  initialUserState,
  on(LoginSuccess, (state=>({...state,user:LoginSuccess.payload}))
  ))
 
 
 