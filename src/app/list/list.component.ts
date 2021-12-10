import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookOperationsService } from '../stores/book-operations.store';
import { Book } from '../interfaces/book';
import { SearchParams } from '../interfaces/searchParams';
import { SimpleModalService } from 'ngx-simple-modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(public bookOperationsService: BookOperationsService, public router: Router, private simpleModalService: SimpleModalService) { }

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

  showCreatedForm() {
    let disposable = this.simpleModalService.addModal(ModalComponent, {})
      .subscribe((isConfirmed) => {
        //We get modal result
        if (isConfirmed) {
          alert('accepted');
        }
        else {
          alert('declined');
        }
      });
    //We can close modal calling disposable.unsubscribe();
    //If modal was not closed manually close it by timeout
    // setTimeout(() => {
    //   disposable.unsubscribe();
    // }, 10000);
  }

}






