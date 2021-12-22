import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BookOperationsService } from '../../stores/book-operations.store';
import { Genre } from '../../interfaces/genre';
import { GenresService } from '../../stores/genres.store';
import { ApiService } from 'src/app/servises/api.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit {
  constructor(
    public ApiService:ApiService,
    public bookOperationsStore: BookOperationsService,
    public genresStore: GenresService,
    public route: ActivatedRoute
  ) {}

  editeForm: FormGroup;
  genresList: Genre[] = this.genresStore.getGenresValue();
  selectedGenresIds?: number[];
  editeBookId:number
  ngOnInit(): void {
    this.editeBookId= this.route.snapshot.params['id'];
    this.selectedGenresIds = this.genresStore.getIdsByGenres(
      this.bookOperationsStore.findBookForEdit(this.editeBookId)?.genres
    );
    this.editeForm = new FormGroup({
      name: new FormControl(
        this.bookOperationsStore.findBookForEdit(this.editeBookId)?.name,
        Validators.required
      ),
      author: new FormControl(
        this.bookOperationsStore.findBookForEdit(this.editeBookId)?.author,
        Validators.required
      ),
      year: new FormControl(
        this.bookOperationsStore.findBookForEdit(this.editeBookId)?.year,
        [Validators.required, Validators.pattern(/^[0-9]{4}$/)]
      ),
      description: new FormControl(
        this.bookOperationsStore.findBookForEdit(this.editeBookId)?.description
      ),
      genres: new FormControl(this.selectedGenresIds, Validators.required),
    });
  }

  submit() {
    let bookEditeObj = this.editeForm.value;
    bookEditeObj.genres = this.genresStore.getGenresById(bookEditeObj.genres);
    bookEditeObj.id = this.route.snapshot.params['id']
    this.ApiService.editeBookApi(bookEditeObj)



  }
}
