import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';
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
      console.log(searchParams)

      this.searchBooksList = this.booksList
        .filter((book) => {
          if (searchParams.name !== null)
            return book.name.includes(searchParams.name)
          else return this.searchBooksList
        })
        .filter((book) => {
          if (searchParams.author !== null)
            return book.author.includes(searchParams.author)
          else return this.searchBooksList
        })
        .filter((book) => {
          if (searchParams.yearFrom !== null)
            return book.year >= searchParams.yearFrom
          else return this.searchBooksList
        })
        .filter((book) => {
          if (searchParams.yearTo !== null)
            return book.year < searchParams.yearTo;
          else return this.searchBooksList
        })
        // .filter((book) => {
        //   if (searchParams.genres.length !== 0)


        //     return book.genres.some( (name:string) => book.name.includes(name) )


        //   else return this.searchBooksList
        // })



    }
  }
}

