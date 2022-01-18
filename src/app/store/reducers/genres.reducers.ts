import { createReducer, on } from "@ngrx/store";
import { getGenresSuccess } from "../actions/genres.actions";
import { initialGenresState } from "../state/genres.state";

export const userReducers = createReducer(
  initialGenresState,
  on(getGenresSuccess, (state, action) => ({ ...state, genres: action.payload }))
)

