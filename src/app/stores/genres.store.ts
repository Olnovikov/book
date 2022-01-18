import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Genre } from '../interfaces/genre';
import { Store } from '@ngrx/store';
import { selectselectGenres } from '../store/selectors/genres.selectors';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  constructor(private store: Store) { }

  private genresSubject: BehaviorSubject<Genre[]> = new BehaviorSubject<
    Genre[]
  >([]);
  // @ts-ignore
  genres$: Observable<Genre[]> = this.store.select(selectselectGenres)

  selectedGenres: number[];

  getGenres(genresApi: Genre[]) {
    this.genresSubject.next(genresApi);
  }

  getIdsByGenres(genres?: Genre[]) {
    let genreIds = genres?.map((genre) => genre.id);
    return genreIds;
  }

  getGenresById(filtredIds: number[]) {
    let genres = this.genresSubject.getValue();
    return genres.filter((genre) => filtredIds.includes(genre.id));
  }
}
