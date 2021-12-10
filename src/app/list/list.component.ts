import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookOperationsService } from '../stores/book-operations.store';
import { Book } from '../interfaces/book';
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

  showCreatedForm() {
    this.simpleModalService.addModal(ModalComponent, { message: 'Click outside to close dialog' }, { closeOnClickOutside: true })

  }

}






