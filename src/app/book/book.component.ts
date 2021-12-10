import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BookOperationsService } from '../stores/book-operations.store';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  constructor(
    public bookOperationsService: BookOperationsService,
    public router: Router
  ) { }

  ngOnInit(): void { }

  @Input() book: Book;

  goToEditePage() {
    this.router.navigate(['/book', this.book.id], {
      queryParams: {
        id: this.book.id,
      },
    });

    this.bookOperationsService.findBookForEdit();
  }
}
