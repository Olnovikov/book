import { RouterReducerState } from "@ngrx/router-store";
import { Book } from "src/app/interfaces/book";
import { Genre } from "src/app/interfaces/genre";
import { User } from "src/app/interfaces/user";
import { initialBooksState } from "./books.state";
import { initialGenresState } from "./genres.state";
import { initialUserState } from "./user.state";

export interface AppState {
  router?: RouterReducerState
  user: User | null
  booksList: Book[]
  genres: Genre[]
}

export const initialAppState: AppState = {
  user: initialUserState,
  booksList: initialBooksState,
  genres: initialGenresState
}

export function getInitialState(): AppState {
  return initialAppState
}
