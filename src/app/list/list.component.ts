import { Component, Input, OnInit } from '@angular/core';
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
      let filtredGenres = searchParams.genres.map((res: Genre) => {
        return res.name;
      });

      this.searchBooksList = this.booksList
        .filter((book) => {
          if (searchParams.name) return book.name.includes(searchParams.name);
          else return true;
        })
        .filter((book) => {
          if (searchParams.author)
            return book.author.includes(searchParams.author);
          else return true;
        })
        .filter((book) => {
          if (searchParams.yearFrom) return book.year >= searchParams.yearFrom;
          else return true;
        })
        .filter((book) => {
          if (searchParams.yearTo) return book.year < searchParams.yearTo;
          else return true;
        })

        .filter((book) =>
          filtredGenres.some((name: string) => {
            return book.genres.some((genre) => {
              return genre.name.includes(name);
            });
          })
        );
    }
  }
}
