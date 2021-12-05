import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { BookOperationsService } from '../book-operations.service';
import { Book } from '../interfaces/book';
import { Genre } from '../interfaces/genre';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {


  constructor(public bookOperationsService:BookOperationsService,public router:Router) { }
  @Output() BookAfterEdit:EventEmitter<Book> = new EventEmitter
  editeForm:FormGroup
  genresList:Genre[]=this.bookOperationsService.genres

    ngOnInit(): void {
   
    
      this.editeForm=new FormGroup({
      name: new FormControl(this.bookOperationsService.editedBook?.name,Validators.required),
      author: new FormControl(this.bookOperationsService.editedBook?.author,Validators.required),
      year: new FormControl(this.bookOperationsService.editedBook?.year,[Validators.required,Validators.pattern(/^[0-9]{4}$/)]),
      description:new FormControl(this.bookOperationsService.editedBook?.description),
      genres:new FormControl(this.bookOperationsService.editedBook?.genres,Validators.required)
      })
    }
  submit(){ 
    // this.BookAfterEdit.emit(this.editeForm.value)
    console.log(this.editeForm.value)
    this.router.navigate([''])
  }
}
