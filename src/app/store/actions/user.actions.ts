import { createAction } from "@ngrx/store";
import { User } from "src/app/interfaces/user";

export const login = createAction('[User] login', function prepare(loginForm) {
  return {
    payload: {
      login: loginForm.login,
      password: loginForm.password
    },
  }
})

export const loginSuccess = createAction('[User] loginSuccess', function prepare(user: User) {
  return {
    payload: user
  }
})
