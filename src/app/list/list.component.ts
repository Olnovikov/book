import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';
import { SearchParams } from '../interfaces/searchParams';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  booksList:Book[]=[]
  searchBooksList:Book[]=[]
  listParam:SearchParams|undefined=undefined
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
  search(searchParams:SearchParams|undefined){

    if (!searchParams) {
     this.listParam=undefined
     console.log('Nofilter')

    } else{
this.listParam=searchParams
this.searchBooksList=this.booksList.slice(0,1)
console.log('filter')
// this.searchBooksList=this.booksList.filter(book=>book.name.includes(searchParams,))


    }
  }

}
