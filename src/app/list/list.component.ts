import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }
  ShowbooksList:Book[]=[]
  booksList:Book[]=[]

  itemsPerPage:number=3
  page:number=1

  ngOnInit(): void {
  }
  getCreatedBook(createdBook:Book){
    this.booksList.push(createdBook)

  }

  getDeleteBook(deletedBook:Book){
    this.booksList=this.booksList.filter(
      book=>book.name!==deletedBook.name&&book.author!==deletedBook.author
      )
  }

}
