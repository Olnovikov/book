import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  getNewBooks(createdBook:Book){
    this.booksList.push(createdBook)
  }
  booksList:Book[]=[]

}
