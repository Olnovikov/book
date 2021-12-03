import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookOperationsService } from '../book-operations.service';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor(public bookOperationsService:BookOperationsService) { }

  ngOnInit(): void {}
 
@Input() book:Book
@Output() deletedBook:EventEmitter<number> = new EventEmitter
@Output() editedBook:EventEmitter<Book> = new EventEmitter


}
