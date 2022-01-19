import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Genre } from '../interfaces/genre';
import { Store } from '@ngrx/store';
import { selectselectGenres } from '../store/selectors/genres.selectors';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  constructor(private store: Store) { }


  // @ts-ignore
  genres$: Observable<Genre[]> = this.store.select(selectselectGenres)

  getIdsByGenres(genres?: Genre[]) {
    let genreIds = genres?.map((genre) => genre.id);
    return genreIds;
  }

  getGenresById(filtredIds: number[]) {

    return this.genres$.pipe(map(genres => genres.filter((genre) => filtredIds.includes(genre.id)))

    )


  }
}
