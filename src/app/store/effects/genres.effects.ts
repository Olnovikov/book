import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, tap } from "rxjs/operators";
import { Genre } from "src/app/interfaces/genre";
import { ApiService } from "src/app/servises/api.service";
import { getGenres, getGenresSuccess } from "../actions/genres.actions";


@Injectable({
    providedIn: 'root',
})
export class GenresEffects {

    constructor(private actions$: Actions, public ApiService: ApiService) { }

    @Effect()
    getGenres$ = this.actions$.pipe(
        ofType(getGenres),
        switchMap(() => this.ApiService.getGenresApi()),
        switchMap((genres: Genre[]) => of(getGenresSuccess(genres)))

    )







}