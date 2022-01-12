import { BooksActions, EBooksActions } from "../actions/books.actions"
import { BooksState, initialBooksState } from "../state/books.state"

export const booksReducers =(
  state=initialBooksState,
  action:BooksActions):BooksState=>{
    switch(action.type){
      case EBooksActions.SetBooksListSuccess:
        return{...state,booksList:action.payload}
      default: return state
    }

  }
