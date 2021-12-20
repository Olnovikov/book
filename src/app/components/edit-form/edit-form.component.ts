import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookOperationsService } from '../../stores/book-operations.store';
import { Genre } from '../../interfaces/genre';
import { GenresService } from '../../stores/genres.store';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit {
  constructor(
    public bookOperationsService: BookOperationsService,
    public genresServise: GenresService,
    public router: Router
  ) { }

  editeForm: FormGroup;
  genresList: Genre[] = this.genresServise.getGenres();

  ngOnInit(): void {
    this.editeForm = new FormGroup({
      name: new FormControl(
        this.bookOperationsService.editedBook?.name,
        Validators.required
      ),
      author: new FormControl(
        this.bookOperationsService.editedBook?.author,
        Validators.required
      ),
      year: new FormControl(this.bookOperationsService.editedBook?.year, [
        Validators.required,
        Validators.pattern(/^[0-9]{4}$/),
      ]),
      description: new FormControl(
        this.bookOperationsService.editedBook?.description
      ),
      genres: new FormControl(
        this.bookOperationsService.editedBook?.genres,
        Validators.required
      ),
    });

  }

  submit() {
    if (this.bookOperationsService.editedBook) {
      let booksList = this.bookOperationsService.getActualBooksList()
      let editIndex = booksList.indexOf(this.bookOperationsService.editedBook);
      let bookEditeObj = this.editeForm.value;
      bookEditeObj.genres = this.genresServise.getGenresById(bookEditeObj.genres)
      bookEditeObj.id = this.bookOperationsService.editedBook.id;
      booksList[editIndex] = bookEditeObj;

    }
    this.router.navigate(['list']);
  }
}
