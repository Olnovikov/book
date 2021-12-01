
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,  } from 'rxjs';
import { Book } from './interfaces/book';




@Injectable({
  providedIn: 'root'
})
export class BookOperationsService {

constructor() { }

private bookSubject:BehaviorSubject<Book[]>=new BehaviorSubject<Book[]>([])
bookslist$:Observable<Book[]>=this.bookSubject.asObservable()

createBooksList(booksList:Book[]){
  return this.bookSubject.next(booksList)
}


}
