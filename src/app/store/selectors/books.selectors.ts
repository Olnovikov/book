import { createSelector } from "@ngrx/store"
import { Book } from "src/app/interfaces/book"
import { AppState } from "../state/app.state"

const selectBooks = (state: AppState) => state.booksList
export const selectselectBooks = createSelector(
    selectBooks,
    (booksList: Book[]) => booksList
)