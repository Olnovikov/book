import { Action, createAction } from "@ngrx/store";

export const Login =createAction('[User] login', function prepare(loginForm) {
  return {
    payload: {
      login: loginForm.login,
      password:loginForm.password
    },
  }
})

export const LoginSuccess =createAction('[User] loginSuccess', function prepare(user) {
  return {
    payload: {
      user: user
    },
  }
})
