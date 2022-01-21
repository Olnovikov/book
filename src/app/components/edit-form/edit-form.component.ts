import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GenresService } from '../../stores/genres.store';
import { ApiService } from 'src/app/servises/api.service';
import { Store } from '@ngrx/store';
import { editeBook } from 'src/app/store/actions/books.actions';
import { getGenresById, getIdsByGenres } from 'src/app/assistentFunctions';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/interfaces/genre';
import { selectselectGenres } from 'src/app/store/selectors/genres.selectors';


@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit {
  constructor(
    public ApiService: ApiService,
    public genresStore: GenresService,
    public route: ActivatedRoute,
    private store: Store
  ) { }

  editeForm: FormGroup;
  selectedGenresIds?: number[];
  // @ts-ignore
  genres$: Observable<Genre[]> = this.store.select(selectselectGenres)

  ngOnInit(): void {

    let editeBookId: number = this.route.snapshot.params['id'];
    this.editeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      year: new FormControl(0, [Validators.required, Validators.pattern(/^[0-9]{4}$/)]),
      description: new FormControl(''),
      genres: new FormControl('', Validators.required),
    });

    this.ApiService.findBookApi(editeBookId).subscribe(

      book => {
        this.selectedGenresIds = getIdsByGenres(book.genres)
        this.editeForm.patchValue({
          name: book.name,
          author: book.author,
          year: book.year,
          description: book.description,
          genres: this.selectedGenresIds

        });

      }

    )

  }

  submit() {
    let bookEditeObj = this.editeForm.value;
    getGenresById(bookEditeObj.genres, this.store).subscribe(
      res => {
        bookEditeObj.genres = res
        bookEditeObj.id = +this.route.snapshot.params['id']
        this.store.dispatch(editeBook(bookEditeObj))
      }

    )


  }
}
