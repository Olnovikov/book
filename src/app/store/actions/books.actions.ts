import { createAction } from "@ngrx/store";
import { Book } from "src/app/interfaces/book";

export const getBooksList = createAction('[Books] getBooksList')

export const getBooksListSuccess = createAction('[Books] getBooksListSuccess', function prepare(booksList: Book[]) {
  return {
    payload: booksList
  }
})

export const createBook = createAction('[Books] createBook', function prepare(createdBook: Book) {
  return {
    payload: createdBook
  }
})

export const createBookSuccess = createAction('[Books] createBookSuccess', function prepare(createdBook: Book) {
  return {
    payload: createdBook
  }
})