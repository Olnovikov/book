import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../interfaces/book';
import { SearchParams } from '../interfaces/searchParams';
import { GenresService } from './genres.store';

@Injectable({
  providedIn: 'root',
})
export class BookOperationsService {
  constructor(public router: Router, public GenresStore: GenresService) {}

  private bookSubject: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>(
    []
  );
  booksList$: Observable<Book[]> = this.bookSubject.asObservable();

  setBooksList(booksList: Book[]) {
    this.bookSubject.next(booksList);
  }

  createBook(createdBook: Book) {
    let booksList = this.bookSubject.getValue();
    booksList.push(createdBook);
    this.setBooksList(booksList);
  }

  deleteBook(deletedBookId: number) {
    let booksList = this.bookSubject
      .getValue()
      .filter((book: Book) => book.id !== deletedBookId);
    this.setBooksList(booksList);
  }

  findBookForEdit(findId: number) {
    let booksList = this.bookSubject.getValue();
    return booksList.find((book) => book.id == findId);
  }

  editeBook(editeBook: Book) {
    let booksList: (Book | undefined)[] = this.getBooksListValue();
    let editIndex = booksList.indexOf(this.findBookForEdit(editeBook.id));
    booksList[editIndex] = editeBook;
    this.router.navigate(['list']);
  }

  getBooksListValue() {
    return this.bookSubject.getValue();
  }

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
