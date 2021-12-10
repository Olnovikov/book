
import { SimpleModalComponent } from "ngx-simple-modal";
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookOperationsService } from '../stores/book-operations.store';
import { Book } from '../interfaces/book';
import { Genre } from '../interfaces/genre';
import { GenresService } from '../stores/genres.store';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent extends SimpleModalComponent<any, boolean>  {
  title: string;
  message: string;
  constructor(public bookOperationsService: BookOperationsService, public genresServise: GenresService) { super() }
  createForm: FormGroup
  genresList: Genre[] = this.genresServise.genres
  @Output() createdBook: EventEmitter<Book> = new EventEmitter

  ngOnInit(): void {
    this.createForm = new FormGroup({
      name: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      year: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{4}$/)]),
      description: new FormControl(''),
      genres: new FormControl([], Validators.required)
    })
  }

  submit() {
    let bookCreateObj = this.createForm.value
    bookCreateObj.id = new Date().valueOf()
    this.bookOperationsService.createBook(bookCreateObj)
    this.createForm.reset()


  }



}
