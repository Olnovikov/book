import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/servises/api.service';
import { SearchParams } from 'src/app/interfaces/searchParams';
import { Store } from '@ngrx/store';
import { getBooksList } from 'src/app/store/actions/books.actions';
import { saveSearchParams } from 'src/app/store/actions/searchParams.actions';
import { Observable } from 'rxjs';
import { selectselectSearchParams } from 'src/app/store/selectors/searchParams.selectors';
import { Genre } from 'src/app/interfaces/genre';
import { selectselectGenres } from 'src/app/store/selectors/genres.selectors';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  constructor(public ApiService: ApiService, private store: Store) { }
  searchForm: FormGroup;
  // @ts-ignore
  searchParams$: Observable<SearchParams | null> = this.store.select(selectselectSearchParams)
  // @ts-ignore
  genres$: Observable<Genre[]> = this.store.select(selectselectGenres)


  ngOnInit(): void {
    this.searchParams$.subscribe(searchParams =>
      this.searchForm = new FormGroup({
        name: new FormControl(searchParams?.name),
        author: new FormControl(searchParams?.author),
        yearFrom: new FormControl(searchParams?.yearFrom, [Validators.pattern(/^[0-9]{4}$/)]),
        yearTo: new FormControl(searchParams?.yearTo, Validators.pattern(/^[0-9]{4}$/)),
        genres: new FormControl(searchParams?.genres),
      })
    )
  }

  disableCheck() {
    return !this.searchForm.value.name && !this.searchForm.value.author && !this.searchForm.value.yearTo && !this.searchForm.value.yearFrom && !this.searchForm.value.genres
  }

  reset() {
    this.store.dispatch(getBooksList(undefined))
    this.store.dispatch(saveSearchParams(null))
  }

  search(searchParams: SearchParams) {
    this.store.dispatch(getBooksList(searchParams))
    this.store.dispatch(saveSearchParams(searchParams))
  }
}
