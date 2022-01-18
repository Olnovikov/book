
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, tap } from "rxjs/operators";
import { Book } from "src/app/interfaces/book";
import { BookOperationsService } from "src/app/stores/book-operations.store";
import { GenresService } from "src/app/stores/genres.store";
import { ApiService } from "../../servises/api.service";
import { createBook, createBookSuccess, deleteBook, deleteBookSuccess, editeBook, editeBookSuccess, getBooksList, getBooksListSuccess } from "../actions/books.actions";



@Injectable({
  providedIn: 'root',
})
export class BooksEffects {
  constructor(private actions$: Actions, public ApiService: ApiService, public GenresStore: GenresService, public BooksOperationsStore: BookOperationsService, public router: Router) { }
  @Effect()
  getBooksList$ = this.actions$.pipe(
    ofType(getBooksList),
    switchMap((action) => this.ApiService.getBooksApi(action.payload)),
    switchMap((booksList: Book[]) => of(getBooksListSuccess(booksList)))

  )

  @Effect()
  createBook$ = this.actions$.pipe(
    ofType(createBook),
    switchMap((action) => this.ApiService.postBookApi(action.payload)),
    switchMap((createdBook: Book | string): any => {
      if (typeof (createdBook) !== 'string') {
        return of(createBookSuccess(createdBook))
      }

    })

  )

  @Effect()
  deleteBook$ = this.actions$.pipe(
    ofType(deleteBook),
    switchMap((action) => this.ApiService.deleteBookApi(action.payload)),
    switchMap((delId: number | string): any => {
      if (typeof (delId) !== 'string') {
        return of(deleteBookSuccess(delId))
      }
    })

  )

  @Effect()
  editeBook$ = this.actions$.pipe(
    ofType(editeBook),
    switchMap((action) => this.ApiService.editeBookApi(action.payload)),
    switchMap((editedBook: Book | string): any => {
      if (typeof (editedBook) !== 'string') {
        return of(editeBookSuccess(editedBook))
      }
    }),
    tap(() => {
      this.router.navigate(['list'])
    })

  )
}

