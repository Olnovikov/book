import { createAction } from "@ngrx/store";
import { Book } from "src/app/interfaces/book";
import { SearchParams } from "src/app/interfaces/searchParams";

export const getBooksList = createAction('[Books] getBooksList', function prepare(searchParams?: SearchParams) {
  return {
    payload: searchParams
  }
})

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

export const deleteBook = createAction('[Books] deleteBook', function prepare(delId: number) {
  return {
    payload: delId
  }
})

export const deleteBookSuccess = createAction('[Books] deleteBookSuccess', function prepare(delId: number) {
  return {
    payload: delId
  }
})

export const editeBook = createAction('[Books] editeBook', function prepare(editedBook: Book) {
  return {
    payload: editedBook
  }
})

export const editeBookSuccess = createAction('[Books] editeBookSuccess', function prepare(editedBook: Book) {
  return {
    payload: editedBook
  }
})

