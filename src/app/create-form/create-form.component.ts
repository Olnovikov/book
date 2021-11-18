import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookOperationsService } from '../book-operations.service';
import { genres } from '../data';
import { Book } from '../interfaces/book';
import { Genre } from '../interfaces/genre';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  constructor(public bookOperationsServices:BookOperationsService) { }
createForm:FormGroup
newBook:Book={
  name: '',
  author: '',
  year: 0,
  genres: [],
  description:''
}
genresList:Genre[]=genres
@Output() createdBook:EventEmitter<Book> = new EventEmitter
  ngOnInit(): void {
    this.createForm=new FormGroup({
    name: new FormControl('',Validators.required),
    author: new FormControl('',Validators.required),
    year: new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{4}$/)]),
    description:new FormControl(''),
    genres:new FormControl('',Validators.required)
    })
  }
submit(){
  this.newBook.name=this.createForm.value.name
  this.newBook.author=this.createForm.value.author
  this.newBook.year=this.createForm.value.year
  this.newBook.description=this.createForm.value.description
  this.newBook.genres=this.bookOperationsServices.getGenres(this.createForm.value.genres,this.genresList)
  this.createForm.reset()
  this.createdBook.emit(this.newBook)



}

}
