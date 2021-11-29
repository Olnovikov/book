import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { genres } from '../data';
import { Genre } from '../interfaces/genre';
import { SearchParams } from '../interfaces/searchParams';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  constructor() {}
  searchForm: FormGroup;
  genresList: Genre[] = genres;
  genreDisableParam: boolean;
  disableparam: boolean = true;
  @Output() searchParams: EventEmitter<SearchParams> = new EventEmitter();

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

  return !this.searchForm.value.name &&!this.searchForm.value.author &&!this.searchForm.value.yearTo &&!this.searchForm.value.yearFrom &&!this.searchForm.value.genres ? true : false;

  }
  reset() {
    this.searchParams.emit(undefined);
  }
}
