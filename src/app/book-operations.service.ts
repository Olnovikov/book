
import { Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject, Observable, } from 'rxjs';
import { Book } from './interfaces/book';
import { Genre } from './interfaces/genre';
import { SearchParams } from './interfaces/searchParams';




@Injectable({
  providedIn: 'root'
})
export class BookOperationsService {

  constructor(public route:ActivatedRoute) { }
  genres: Genre[] = [
    { id: 1, name: 'повесть' }, { id: 2, name: 'рассказ' }, { id: 3, name: 'новелла' }, { id: 4, name: 'поэма' }, { id: 5, name: 'роман' }, { id: 6, name: 'ода' }
  ]
  editedBook?:Book
  booksList: Book[] = [
  {
    name: 'Герой нашего времени',
    author: 'Лермонтов',
    year: 1842,
    genres: [{ id: 5, name: 'роман' }],
    id: 1
  }, 
  {
    name: 'Цветы для Элджернона',
    author: 'Киз',
    year: 1925,
    genres: [{ id: 1, name: 'повесть' }],
    id: 2
  }
];
  
  private bookSubject: BehaviorSubject<any> = new BehaviorSubject<Book[]>([]) 
  bookslist$: Observable<Book[]> = this.bookSubject.asObservable()

  createBook(createdBook: Book) {

    this.booksList = this.bookSubject.getValue()
    this.booksList.push(createdBook)
    this.setBooksList(this.booksList)

  }
  setBooksList(booksList: Book[]) {
    this.bookSubject.next(booksList)
  }
  deleteBook(deletedBookId: number) {
    this.booksList = this.bookSubject.getValue().filter(
      (book: Book) =>
        book.id !== deletedBookId
    );
    this.setBooksList(this.booksList)

  }
  findBookForEdit(){
     this.route.queryParams.subscribe((params: Params) => {
       
       this.editedBook= this.booksList.find(
          (book) =>
          book.id  == params.id
        )
      
      });
  }
  searchBook(searchParams?: SearchParams) {
    if (searchParams) {

      let filtredGenres = (searchParams?.genres || []).map((res: Genre) => {
        return res.name;
      });

      let searchBooksList = this.booksList.filter((book) => {
        return (
          this.filterName(book, searchParams) &&
          this.filterAuthor(book, searchParams) &&
          this.filterYearFrom(book, searchParams) &&
          this.filterYearTo(book, searchParams) &&
          this.filterGenres(book, searchParams, filtredGenres)
        );
      });
      this.setBooksList(searchBooksList)
    }
    else this.setBooksList(this.booksList)
  }
  
  filterName(book: Book, searchParams: SearchParams) {
    if (searchParams.name) return book.name.includes(searchParams.name);
    else return true;
  }

  filterAuthor(book: Book, searchParams: SearchParams) {
    if (searchParams.author) return book.author.includes(searchParams.author);
    else return true;
  }

  filterYearFrom(book: Book, searchParams: SearchParams) {
    if (searchParams.yearFrom) return book.year >= searchParams.yearFrom;
    else return true;
  }

  filterYearTo(book: Book, searchParams: SearchParams) {
    if (searchParams.yearTo) return book.year < searchParams.yearTo;
    else return true;
  }

  filterGenres(
    book: Book,
    searchParams: SearchParams,
    filtredGenres: string[]
  ) {

    if (searchParams.genres) {
      return book.genres.some((genre: Genre) => {
        return filtredGenres.includes(genre.name);
      });
    } else return true;
  }
}
