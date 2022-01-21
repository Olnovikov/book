import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { User } from '../interfaces/user';
import { ToastrService } from 'ngx-toastr';
import { Genre } from '../interfaces/genre';
import { Book } from '../interfaces/book';
import { SearchParams } from '../interfaces/searchParams';
import { Store } from '@ngrx/store';
import { editeSearchParamsToApi, getIdsByGenres } from '../assistentFunctions';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    public http: HttpClient,
    private toastr: ToastrService,
    private store: Store
  ) { }

  getTokenApi(login: string, password: string) {
    return this.http
      .post<any>('/api/auth/login', { login: login, password: password })
      .pipe(
        catchError((err) => {
          console.log(err);
          if (err.status == 401) {
            this.toastr.warning('неверный логин или пароль');
          }
          return [];
        })
      )

  }

  getProfileApi() {
    return this.http.get<User>('/api/auth/profile')
  }

  getBooksApi(searchParams?: SearchParams) {
    const params = new HttpParams({
      fromObject:
        searchParams ? editeSearchParamsToApi(searchParams) : {}

    });
    return this.http.get<Book[]>('/api/auth/books', { params: params })

  }


  getGenresApi() {
    return this.http.get<Genre[]>('/api/auth/genre')

  }

  postBookApi(createdBook: Book) {
    let createGenres = getIdsByGenres(createdBook.genres);
    let createdBookApi: any = { ...createdBook }
    createdBookApi.genreIds = createdBookApi.genres = createGenres;
    delete createdBookApi.genres;

    return this.http
      .post('/api/auth/books', createdBookApi, { responseType: 'text' }).pipe(
        map((res) => {
          if (res = 'This action adds a new book') {

            return createdBook
          }
          else return res
        })

      )

  }

  deleteBookApi(delId: number) {
    return this.http
      .delete(`/api/auth/books/${delId}`, { responseType: 'text' }).pipe(
        map((res) => {
          if (res = `This action removes a #${delId} book`) {

            return delId
          }
          else return res
        })

      )

  }

  editeBookApi(editeBook: Book) {
    let editeGenres = getIdsByGenres(editeBook.genres);
    let editeBookApi: any = { ...editeBook }
    editeBookApi.genreIds = editeBookApi.genres = editeGenres;
    delete editeBookApi.genres;

    return this.http
      .patch(`/api/auth/books/${editeBookApi.id}`, editeBookApi, { responseType: 'text' }).pipe(
        map((res) => {
          if (res = `This action updates a #${editeBookApi.id} book`) {

            return editeBook
          }
          else return res
        })

      )

  }

  findBookApi(findId: number) {
    return this.http.get<Book>(`/api/auth/books/${findId}`)
  }

  // editeSearchParamsToApi(searchParams: SearchParams) {
  //   let searchGenres = this.GenresStore.getIdsByGenres(searchParams.genres);
  //   let searchParamsApi: any = { ...searchParams };
  //   searchParamsApi.genreIds = searchParamsApi.genres = searchGenres;
  //   delete searchParamsApi.genres;
  //   for (let key in searchParamsApi) {
  //     if (searchParamsApi[key] == null) {
  //       delete searchParamsApi[key];
  //     }
  //   }
  //   return searchParamsApi;
  // }

}
