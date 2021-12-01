
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,  } from 'rxjs';
import { Book } from './interfaces/book';




@Injectable({
  providedIn: 'root'
})
export class BookOperationsService {

constructor() { }
booksList: Book[] = [];
private bookSubject:BehaviorSubject<any>=new BehaviorSubject<Book[]>([])
bookslist$:Observable<Book[]>=this.bookSubject.asObservable()

createBook(createdBook:Book){

this.booksList=this.bookSubject.getValue()
this.booksList.push(createdBook)
this.getBooksList(this.booksList)

}
getBooksList(booksList: Book[]){
  this.bookSubject.next(booksList)
}
deleteBook(deletedBook: Book) {
  this.booksList=this.bookSubject.getValue().filter(
    (book:Book) =>
      book.name !== deletedBook.name || book.author !== deletedBook.author
  );
  this.getBooksList(this.booksList)

}
searchBook(){}
}
