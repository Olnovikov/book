import { Observable } from "rxjs";
import { SearchParams } from "src/app/interfaces/searchParams";
import { Genre } from "./interfaces/genre";
import { map } from "rxjs/operators";


export const editeSearchParamsToApi = (searchParams: SearchParams) => {
    let searchGenres = getIdsByGenres(searchParams.genres);
    let searchParamsApi: any = { ...searchParams };
    searchParamsApi.genreIds = searchParamsApi.genres = searchGenres;
    delete searchParamsApi.genres;
    for (let key in searchParamsApi) {
        if (searchParamsApi[key] == null) {
            delete searchParamsApi[key];
        }
    }
    return searchParamsApi;
}

export const getIdsByGenres = (genres?: Genre[]) => {
    let genreIds = genres?.map((genre) => genre.id);
    return genreIds;
}


export const getGenresById = (filtredIds: number[], genres$: Observable<Genre[]>) => {

    return genres$.pipe(map(genres => genres.filter((genre) => filtredIds.includes(genre.id))))
}