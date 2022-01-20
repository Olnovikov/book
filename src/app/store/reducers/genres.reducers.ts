import { createReducer, on } from "@ngrx/store";
import { getGenresSuccess } from "../actions/genres.actions";
import { initialGenresState } from "../state/genres.state";

export const genresReducers = createReducer(
  initialGenresState,
  on(getGenresSuccess, (genres, action) => genres = action.payload)
)

