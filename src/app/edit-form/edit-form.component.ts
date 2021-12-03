import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookOperationsService } from '../book-operations.service';
import { Genre } from '../interfaces/genre';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {


  constructor(public bookOperationsService:BookOperationsService) { }
  editeForm:FormGroup
  genresList:Genre[]=this.bookOperationsService.genres

    ngOnInit(): void {
      console.log(this.bookOperationsService.editedBook)
      this.editeForm=new FormGroup({
      name: new FormControl(this.bookOperationsService.editedBook.name,Validators.required),
      author: new FormControl(this.bookOperationsService.editedBook.author,Validators.required),
      year: new FormControl(this.bookOperationsService.editedBook.year,[Validators.required,Validators.pattern(/^[0-9]{4}$/)]),
      description:new FormControl(this.bookOperationsService.editedBook.description),
      genres:new FormControl(this.bookOperationsService.editedBook.genres,Validators.required)
      })
    }
  submit(){ }
}
