import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookOperationsService } from '../book-operations.service';
import { Book } from '../interfaces/book';
import { SearchParams } from '../interfaces/searchParams';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(public bookOperationsService:BookOperationsService,public router:Router) {}

  ngOnInit(): void {
    this.bookOperationsService.setBooksList(this.bookOperationsService.booksList)
  }
  
 
  createBook(createdBook: Book) {
    this.bookOperationsService.createBook(createdBook)
  }

  deleteBook(deletedBookId: number) {
    this.bookOperationsService.deleteBook(deletedBookId)
  }

  search(searchParams?: SearchParams) {
    this.bookOperationsService.searchBook(searchParams)
  }

}






