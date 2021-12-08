import { Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './interfaces/book';
import { Genre } from './interfaces/genre';
import { SearchParams } from './interfaces/searchParams';

@Injectable({
  providedIn: 'root',
})
export class BookOperationsService {
  constructor(public route: ActivatedRoute) {}
  genres: Genre[] = [
    { id: 1, name: 'повесть' },
    { id: 2, name: 'рассказ' },
    { id: 3, name: 'новелла' },
    { id: 4, name: 'поэма' },
    { id: 5, name: 'роман' },
    { id: 6, name: 'ода' },
  ];
  editedBook?: Book;
  booksList: Book[] = [
    {
      name: 'Герой нашего времени',
      author: 'Лермонтов',
      year: 1842,
      genres: [{ id: 5, name: 'роман' }],
      id: 1,
    },
    {
      name: 'Цветы для Элджернона',
      author: 'Киз',
      year: 1925,
      genres: [{ id: 1, name: 'повесть' }],
      id: 2,
    },
  ];
  private searchSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
   undefined
  );
  searchParams$: Observable<SearchParams> = this.searchSubject.asObservable();
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
      } else return this.booksList;
    })
  );

  createBook(createdBook: Book) {
    this.booksList = this.bookSubject.getValue();
    this.booksList.push(createdBook);
    this.setBooksList(this.booksList);
  }
  setBooksList(booksList: Book[]) {
    this.bookSubject.next(booksList);
  }
  deleteBook(deletedBookId: number) {
    this.booksList = this.bookSubject
      .getValue()
      .filter((book: Book) => book.id !== deletedBookId);
    this.setBooksList(this.booksList);
  }
  findBookForEdit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.editedBook = this.booksList.find((book) => book.id == params.id);
    });
  }
  searchBook(searchParams?: SearchParams) {
    this.searchSubject.next(searchParams);
    console.log(this.searchSubject.getValue())
    return searchParams
  }
  getValueFilter(){

    return this.searchSubject.getValue()
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
