import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Genre } from '../interfaces/genre';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  private genresSubject: BehaviorSubject<Genre[]> = new BehaviorSubject<Genre[]>(
    [
      { id: 1, name: 'повесть' },
      { id: 2, name: 'рассказ' },
      { id: 3, name: 'новелла' },
      { id: 4, name: 'поэма' },
      { id: 5, name: 'роман' },
      { id: 6, name: 'ода' },
    ]
  )
  genres$: Observable<Genre[]> = this.genresSubject.asObservable();
  getGenres() {
    return this.genresSubject.getValue()
  }
  constructor() { }
}
