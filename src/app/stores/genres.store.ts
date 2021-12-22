import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Genre } from '../interfaces/genre';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  private genresSubject: BehaviorSubject<Genre[]> = new BehaviorSubject<Genre[]>(
    []
  )
  genres$: Observable<Genre[]> = this.genresSubject.asObservable();

  selectedGenres:number[]

  getGenres(genresApi:Genre[]){

    this.genresSubject.next(genresApi)
  }
  getGenresValue() {

    return this.genresSubject.getValue()
  }


  getIdsByGenres(genres:Genre[]){
    return genres.map(genre=>genre.id)
  }

  getGenresById(filtredIds:number[]){

    let genres=this.genresSubject.getValue()
    return genres.filter( genre => filtredIds.includes( genre.id) )
  }
  constructor() { }
}
