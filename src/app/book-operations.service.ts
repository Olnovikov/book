import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genre } from './interfaces/genre';


@Injectable({
  providedIn: 'root'
})
export class BookOperationsService {

  constructor(public http: HttpClient) { }
  // getGenres(){
  //   return this.http.get<any>('/data.ts').subscribe(res=>console.log(res))
  // }
}
