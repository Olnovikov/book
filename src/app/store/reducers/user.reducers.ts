import { createReducer, on } from "@ngrx/store";
import { loginSuccess, } from "../actions/user.actions";
import { initialUserState } from "../state/user.state";


export const userReducers = createReducer(
  initialUserState,
  on(loginSuccess, (user, action) => user = action.payload)
)


