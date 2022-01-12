import { RouterReducerState } from "@ngrx/router-store";
import { BooksState, initialBooksState } from "./books.state";
import { GenresState, initialGenresState } from "./genres.state";
import { initialUserState, UserState } from "./user.state";

export interface AppState {
  router?:RouterReducerState
  user:UserState
  booksList:BooksState
  genres:GenresState
  }

export const initialAppState:AppState = {
  user:initialUserState,
  booksList:initialBooksState,
  genres:initialGenresState
}

export function getInitialState():AppState{
  return initialAppState
}
