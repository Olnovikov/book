import { createAction } from "@ngrx/store";
import { Genre } from "src/app/interfaces/genre";

export const getGenres = createAction('[Genres] getGenres')

export const getGenresSuccess = createAction('[Genres] getGenresSuccess', function prepare(genres: Genre[]) {
  return {
    payload: genres
  }
})
