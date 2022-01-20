import { createReducer, on } from "@ngrx/store";
import { createBookSuccess, deleteBookSuccess, editeBookSuccess, getBooksListSuccess } from "../actions/books.actions";
import { initialBooksState } from "../state/books.state";


export const booksReducers = createReducer(

  initialBooksState,
  on(getBooksListSuccess, (state, action) => state = action.payload),
  on(createBookSuccess, (state, action) => {
    const booksList = [...state, action.payload]
    return state = booksList
  }),
  on(deleteBookSuccess, (state, action) => {
    const booksList = [...state].filter(book => book.id !== action.payload)
    return state = booksList
  }
  ),
  on(editeBookSuccess, (state, action) => {
    let booksList = [...state]
    let oldEditedBook = booksList.find((book) => book.id == action.payload.id)
    if (oldEditedBook) {
      let editIndex = booksList.indexOf(oldEditedBook)
      booksList[editIndex] = action.payload
    }
    return state = booksList
  }
  )

)