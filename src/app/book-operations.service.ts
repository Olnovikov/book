import { Injectable } from '@angular/core';
import { Genre } from './interfaces/genre';

@Injectable({
  providedIn: 'root'
})
export class BookOperationsService {

  constructor() { }
  getGenres(res:any,allGenres:Genre[]){
    res=res.map((res:any) => {
      return res.$ngOptionLabel;
    })
    return allGenres.filter( item => res.some( (name:string) => item.name.includes(name) ) )

  }
}
