import { Component, OnInit } from '@angular/core';
import { BookOperationsService } from '../book-operations.service';
import { Book } from '../interfaces/book';
import { Genre } from '../interfaces/genre';
import { SearchParams } from '../interfaces/searchParams';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(public bookOperationsService:BookOperationsService) {}


  booksList: Book[] = [];
  searchBooksList: Book[] = [];
  itemsPerPage: number = 3;
  page: number = 1;

  ngOnInit(): void {}

  createBook(createdBook: Book) {
    this.booksList.push(createdBook);
    this.bookOperationsService.createBooksList(this.booksList)
  }

  deleteBook(deletedBook: Book) {
    this.booksList = this.booksList.filter(
      (book) =>
        book.name !== deletedBook.name || book.author !== deletedBook.author
    );
    this.bookOperationsService.createBooksList(this.booksList)
  }

  search(searchParams?: SearchParams) {
    if (searchParams) {

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
      this.bookOperationsService.createBooksList(this.searchBooksList)
    }
    else this.bookOperationsService.createBooksList(this.booksList)
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
