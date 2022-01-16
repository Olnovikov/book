
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { switchMap, tap } from "rxjs/operators";
import { Book } from "src/app/interfaces/book";
import { GenresService } from "src/app/stores/genres.store";
import { ApiService } from "../../servises/api.service";
import { createBook, createBookSuccess, getBooksList, getBooksListSuccess } from "../actions/books.actions";



@Injectable({
  providedIn: 'root',
})
export class BooksEffects {
  constructor(private actions$: Actions, public ApiService: ApiService, public GenresStore: GenresService) { }
  @Effect()
  getBooksList$ = this.actions$.pipe(
    ofType(getBooksList),
    switchMap(() => this.ApiService.getBooksApi()),
    switchMap((booksList) => of(getBooksListSuccess(booksList)))

  )

  @Effect()
  createBook$ = this.actions$.pipe(
    ofType(createBook),
    switchMap((action) => this.ApiService.postBookApi(action.payload)),
    switchMap((createdBook): any => {
      if (typeof (createdBook) !== 'string') {
        of(createBookSuccess(createdBook))
      }

    })

  )
}

