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
  booksOnPage=3
  lastPage:number
  page:number=1
  pages:number[]=[]
  ngOnInit(): void {
  }
  getCreatedBook(createdBook:Book){
    this.booksList.push(createdBook)
    this.setPagination(this.booksList)

  }
  getDeleteBook(deletedBook:Book){
    this.booksList=this.booksList.filter(
      book=>book.name!==deletedBook.name&&book.author!==deletedBook.author
      )
      this.setPagination(this.booksList)
  }
  setPagination(booksList:Book[]){
    this.pages=[]
    this.lastPage=Math.ceil(this.booksList.length/this.booksOnPage)
    for (let i = 1; i <= this.lastPage; i++) {
   this.pages.push(i)

    }
    this.goToPage(this.page)

  }
  goToPage(currentPage:number){
    this.page=currentPage
    const firstElementIndex = (currentPage - 1) * this.booksOnPage
    const lastElementIndex = currentPage* this.booksOnPage
     this.ShowbooksList= this.booksList
        .slice(firstElementIndex,lastElementIndex)
        if (this.ShowbooksList.length==0&&this.page!==1) {
          this.goToPage(this.page-1)
          return

        }
        else{ return this.ShowbooksList }
    }
}
