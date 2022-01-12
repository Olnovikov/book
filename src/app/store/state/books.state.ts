import { Book } from "src/app/interfaces/book";

export interface BooksState {

  booksList:Book[]
  }

  export const initialBooksState:BooksState = {booksList:[]}
