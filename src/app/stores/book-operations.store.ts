import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';
import { SearchParams } from '../interfaces/searchParams';
import { selectselectBooks } from '../store/selectors/books.selectors';
import { GenresService } from './genres.store';

@Injectable({
  providedIn: 'root',
})
export class BookOperationsService {
  constructor(public router: Router, public GenresStore: GenresService, private store: Store) { }

  // @ts-ignore
  booksList$: Observable<Book[]> = this.store.select(selectselectBooks)



  getSearchParams(searchParams: SearchParams) {
    let searchGenres = this.GenresStore.getIdsByGenres(searchParams.genres);
    let searchParamsApi: any = { ...searchParams };
    searchParamsApi.genreIds = searchParamsApi.genres = searchGenres;
    delete searchParamsApi.genres;
    for (let key in searchParamsApi) {
      if (searchParamsApi[key] == null) {
        delete searchParamsApi[key];
      }
    }
    return searchParamsApi;
  }
}
