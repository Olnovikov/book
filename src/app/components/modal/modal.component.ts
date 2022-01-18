
import { SimpleModalComponent } from "ngx-simple-modal";
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../interfaces/book';
import { GenresService } from '../../stores/genres.store';
import { ApiService } from "src/app/servises/api.service";
import { Store } from "@ngrx/store";
import { createBook } from "src/app/store/actions/books.actions";


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent extends SimpleModalComponent<any, boolean> implements OnInit {

  constructor(public genresStore: GenresService, public ApiService: ApiService, private store: Store) { super() }
  createForm: FormGroup
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
    this.store.dispatch(createBook(bookCreateObj))
    this.createForm.reset()
    this.close()

  }



}
