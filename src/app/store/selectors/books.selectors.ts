import { createSelector } from "@ngrx/store"
import { AppState } from "../state/app.state"
import { BooksState } from "../state/books.state"
const selectBooks = (state: AppState) => state.booksList
export const selectselectBooks = createSelector(
    selectBooks,
    (state: BooksState) => state.booksList
)