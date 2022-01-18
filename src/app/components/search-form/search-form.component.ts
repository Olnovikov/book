import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenresService } from '../../stores/genres.store';
import { ApiService } from 'src/app/servises/api.service';
import { SearchParams } from 'src/app/interfaces/searchParams';
import { Store } from '@ngrx/store';
import { getBooksList } from 'src/app/store/actions/books.actions';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  constructor(public genresStore: GenresService, public ApiService: ApiService, private store: Store) { }
  searchForm: FormGroup;

  ngOnInit(): void {

    this.searchForm = new FormGroup({
      name: new FormControl(null),
      author: new FormControl(null),
      yearFrom: new FormControl(null, [Validators.pattern(/^[0-9]{4}$/)]),
      yearTo: new FormControl(null, Validators.pattern(/^[0-9]{4}$/)),
      genres: new FormControl(null),
    });

  }

  disableCheck() {
    return !this.searchForm.value.name && !this.searchForm.value.author && !this.searchForm.value.yearTo && !this.searchForm.value.yearFrom && !this.searchForm.value.genres
  }

  reset() {
    this.ApiService.getBooksApi(undefined)
  }

  search(searchParams: SearchParams) {
    this.store.dispatch(getBooksList(searchParams))
  }
}
