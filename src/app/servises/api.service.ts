import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { User } from '../interfaces/user';
import { UserService } from '../stores/user.store';
import { ToastrService } from 'ngx-toastr';
import { GenresService } from '../stores/genres.store';
import { Genre } from '../interfaces/genre';
import { BookOperationsService } from '../stores/book-operations.store';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    public http: HttpClient,
    public UserStore: UserService,
    public GenresStore:GenresService,
    private toastr: ToastrService,
    public BookOperationsStore:BookOperationsService
  ) {}
  getTokenApi(login: string, password: string) {
    return this.http
      .post('/api/auth/login', { login: login, password: password })
      .pipe(
        catchError((err) => {
          console.log(err)
          if (err.status == 401) {

            this.toastr.warning('неверный логин или пароль');
          }
          return [];
        })
      )
      .subscribe((res: any) => {
        this.UserStore.login(res)
      });
  }
  getProfileApi() {
    this.http.get<User>('/api/auth/profile').subscribe((res) => {

      this.UserStore.setUser(res);
    });
  }

  getBooksApi() {
    this.http.get<Book[]>('/api/auth/books').subscribe((books) => {

     this.BookOperationsStore.setBooksList(books)
    });
  }

  getGenresApi() {
    this.http.get<Genre[]>('/api/auth/genre').subscribe((genres) => {
    this.GenresStore.getGenres(genres)
    });
  }

  postBookApi(createdBook:Book){
 let createGenres= this.GenresStore.getIdsByGenres(createdBook.genres)
  let createdBookApi:any=createdBook
  createdBookApi.genreIds= createdBookApi.genres=createGenres
  delete createdBookApi.genres

  this.http
      .post('/api/auth/books', createdBookApi, { responseType:'text'} ).subscribe(
        res=>{
        if(res='This action adds a new book'){
          this.BookOperationsStore.createBook(createdBook)
        }
      }






      )

  }
}
