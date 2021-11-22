import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { genres } from '../data';
import { Genre } from '../interfaces/genre';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  constructor() { }
  searchForm:FormGroup
  genresList:Genre[]=genres
  ngOnInit(): void {
    this.searchForm=new FormGroup({
      name: new FormControl(''),
      author: new FormControl(''),
      yearFrom: new FormControl('',[Validators.pattern(/^[0-9]{4}$/)]),
      yearTo: new FormControl('',Validators.pattern(/^[0-9]{4}$/)),
      genres:new FormControl('')
      })
  }
search(){
  console.log(this.searchForm.value)
}
}
