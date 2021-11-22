import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() book:Book
@Output() deletedBook:EventEmitter<Book> = new EventEmitter

}
