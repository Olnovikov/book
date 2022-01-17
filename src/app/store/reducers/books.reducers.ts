import { createReducer, on } from "@ngrx/store";
import { createBookSuccess, getBooksListSuccess } from "../actions/books.actions";
import { initialBooksState } from "../state/books.state";


export const booksReducers = createReducer(
  initialBooksState,
  on(getBooksListSuccess, (state, action) => ({ ...state, booksList: action.payload })),
  on(createBookSuccess, (state, action): any => {

    ({ ...state, booksList: state.booksList.push(action.payload) })
  })
)