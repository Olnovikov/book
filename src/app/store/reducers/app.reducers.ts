import { routerReducer } from "@ngrx/router-store"
import { ActionReducerMap } from "@ngrx/store"
import { AppState } from "../state/app.state"
import { booksReducers } from "./books.reducers"
import { genresReducers } from "./genres.reducers"
import { userReducers } from "./user.reducers"

export const appReducers:ActionReducerMap<AppState,any>={
  router:routerReducer,
  user:userReducers,
  booksList:booksReducers,
  genres:genresReducers
}
