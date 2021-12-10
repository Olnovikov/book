import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookOperationsService } from '../stores/book-operations.store';
import { Genre } from '../interfaces/genre';
import { GenresService } from '../stores/genres.store';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  constructor(public bookOperationsService: BookOperationsService, public genresServise: GenresService) { }
  searchForm: FormGroup;
  genresList: Genre[] = this.genresServise.getGenres();
  genreDisableParam: boolean;
  disableparam: boolean = true;

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name: new FormControl(this.bookOperationsService.getValueFilter() ? this.bookOperationsService.getValueFilter()?.name : null),
      author: new FormControl(this.bookOperationsService.getValueFilter() ? this.bookOperationsService.getValueFilter()?.author : null),
      yearFrom: new FormControl(this.bookOperationsService.getValueFilter() ? this.bookOperationsService.getValueFilter()?.yearFrom : null, [Validators.pattern(/^[0-9]{4}$/)]),
      yearTo: new FormControl(this.bookOperationsService.getValueFilter() ? this.bookOperationsService.getValueFilter()?.yearTo : null, Validators.pattern(/^[0-9]{4}$/)),
      genres: new FormControl(this.bookOperationsService.getValueFilter() !== null ? this.bookOperationsService.getValueFilter()?.genres : []),
    });

  }

  disableCheck() {
    return !this.searchForm.value.name && !this.searchForm.value.author && !this.searchForm.value.yearTo && !this.searchForm.value.yearFrom && !this.searchForm.value.genres ? true : false;
  }

  reset() {
    this.bookOperationsService.searchBook(undefined)
  }
}
