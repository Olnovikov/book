
import { SimpleModalComponent } from "ngx-simple-modal";
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../interfaces/book';
import { ApiService } from "src/app/servises/api.service";
import { Store } from "@ngrx/store";
import { createBook } from "src/app/store/actions/books.actions";
import { Observable } from "rxjs";
import { Genre } from "src/app/interfaces/genre";
import { selectselectGenres } from "src/app/store/selectors/genres.selectors";


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent extends SimpleModalComponent<any, boolean> implements OnInit {

  constructor(public ApiService: ApiService, private store: Store) { super() }

  // @ts-ignore
  genres$: Observable<Genre[]> = this.store.select(selectselectGenres)
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
