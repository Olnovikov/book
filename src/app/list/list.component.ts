import { Component, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';
import { Genre } from '../interfaces/genre';
import { SearchParams } from '../interfaces/searchParams';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor() {}

  get getList() {
    return this.listParam ? this.searchBooksList : this.booksList
  }
  booksList: Book[] = [];
  searchBooksList: Book[] = [];
  listParam: SearchParams | undefined = undefined;
  itemsPerPage: number = 3;
  page: number = 1;

  ngOnInit(): void {}
  getCreatedBook(createdBook: Book) {
    this.booksList.push(createdBook);
  }

  getDeleteBook(deletedBook: Book) {
    this.booksList = this.booksList.filter(
      (book) =>
        book.name !== deletedBook.name || book.author !== deletedBook.author
    );
  }
  search(searchParams?: SearchParams) {
    if (!searchParams) {
      this.listParam = undefined;
    } else {
      this.listParam = searchParams;
      let filtredGenres = (searchParams?.genres || []).map((res: Genre) => {
        return res.name;
      });

      this.searchBooksList = this.booksList.filter((book) => {
        return (
          this.filterName(book, searchParams) &&
          this.filterAuthor(book, searchParams) &&
          this.filterYearFrom(book, searchParams) &&
          this.filterYearTo(book, searchParams) &&
          this.filterGenres(book, searchParams, filtredGenres)
        );
      });
    }
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
      if (searchParams.genres.length)
        return book.genres.some((genre: Genre) => {
          return filtredGenres.includes(genre.name);
        });
      else return true;
    } else return true;
  }
}
