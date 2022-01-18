import { ChangeDetectionStrategy, Component, Input, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../interfaces/book';
import { Store } from '@ngrx/store';
import { deleteBook } from 'src/app/store/actions/books.actions';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class BookComponent implements OnInit {
  constructor(
    private store: Store,
    public router: Router
  ) { }

  ngOnInit(): void { }

  @Input() book: Book;

  goToEditePage() {
    this.router.navigate(['/book', this.book.id]);

  }

  deleteBook(delId: number) {
    this.store.dispatch(deleteBook(delId))
  }
}
