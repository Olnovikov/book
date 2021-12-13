import { Component, Input, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { BookOperationsService } from '../stores/book-operations.store';
import { Book } from '../interfaces/book';
import { GenresService } from '../stores/genres.store';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  constructor(
    public genresServise: GenresService,
    public bookOperationsService: BookOperationsService,
    public router: Router
  ) { }

  ngOnInit(): void { }

  @Input() book: Book;

  goToEditePage() {
    this.router.navigate(['/book', this.book.id], {});

    this.bookOperationsService.findBookForEdit(this.book.id);
    this.genresServise.getIdsByGenres(this.book.genres)
  }
}
