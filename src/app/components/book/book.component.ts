import { Component, Input, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { BookOperationsService } from '../../stores/book-operations.store';
import { Book } from '../../interfaces/book';
import { GenresService } from '../../stores/genres.store';
import { ApiService } from 'src/app/servises/api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  constructor(
    public genresStore: GenresService,
    public bookOperationsStore: BookOperationsService,
    public ApiService: ApiService,
    public router: Router
  ) { }

  ngOnInit(): void { }

  @Input() book: Book;

  goToEditePage() {
    this.router.navigate(['/book', this.book.id]);

  }
}
