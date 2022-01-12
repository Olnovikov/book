import { EUserActions, UserActions } from "../actions/user.actions";
import { initialUserState, UserState } from "../state/user.state";


export const userReducers =(
  state=initialUserState,
  action:UserActions):UserState=>{
    switch(action.type){
      case EUserActions.LoginSuccess:
        return{...state,user:action.payload}
      default: return state
    }

  }
