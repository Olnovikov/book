import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../interfaces/book';
import { Genre } from '../interfaces/genre';
import { SearchParams } from '../interfaces/searchParams';
import { GenresService } from './genres.store';

@Injectable({
  providedIn: 'root',
})
export class BookOperationsService {
  constructor(public route: ActivatedRoute, public router: Router, public GenresStore: GenresService) { }

  private searchSubject: BehaviorSubject<SearchParams | undefined> = new BehaviorSubject<SearchParams | undefined>(
    undefined
  );
  searchParams$: Observable<SearchParams | undefined> = this.searchSubject.asObservable();
  private bookSubject: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>(
    []
  );
  booksList$: Observable<Book[]> = this.bookSubject.asObservable();
  searchBooksList$: Observable<Book[]> = combineLatest(
    this.booksList$,
    this.searchParams$
  ).pipe(
    map(([books, filterParams]) => {
      if (filterParams) {
        let filtredGenres = (filterParams.genres || []).map((res: Genre) => {
          return res.name;
        });

        return books.filter((book) => {
          return (
            this.filterName(book, filterParams) &&
            this.filterAuthor(book, filterParams) &&
            this.filterYearFrom(book, filterParams) &&
            this.filterYearTo(book, filterParams) &&
            this.filterGenres(book, filterParams, filtredGenres)
          );
        });
      } else return this.bookSubject.getValue();
    })
  );

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
    return booksList.find((book) => book.id == findId)

  }

  editeBook(editeBook: Book) {

    let booksList: (Book | undefined)[] = this.getBooksListValue();
    let editIndex = booksList.indexOf(this.findBookForEdit(editeBook.id));
    booksList[editIndex] = editeBook;
    this.router.navigate(['list']);
  }

  searchBook(searchParams?: SearchParams) {
    this.searchSubject.next(searchParams);

    return searchParams
  }




  getValueFilter() {
    return this.searchSubject.getValue() ? this.searchSubject.getValue() : null

  }



  getBooksListValue() {
    return this.bookSubject.getValue()
  }

  filterName(book: Book, filterParams: SearchParams) {
    if (filterParams.name) return book.name.includes(filterParams.name);
    else return true;
  }

  filterAuthor(book: Book, filterParams: SearchParams) {
    if (filterParams.author) return book.author.includes(filterParams.author);
    else return true;
  }

  filterYearFrom(book: Book, filterParams: SearchParams) {
    if (filterParams.yearFrom) return book.year >= filterParams.yearFrom;
    else return true;
  }

  filterYearTo(book: Book, filterParams: SearchParams) {
    if (filterParams.yearTo) return book.year < filterParams.yearTo;
    else return true;
  }

  filterGenres(
    book: Book,
    filterParams: SearchParams,
    filtredGenres: string[]
  ) {
    if (filterParams.genres) {
      return book.genres.some((genre: Genre) => {
        return filtredGenres.includes(genre.name);
      });
    } else return true;
  }
}
