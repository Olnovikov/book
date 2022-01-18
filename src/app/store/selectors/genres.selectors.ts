import { createSelector } from "@ngrx/store"
import { AppState } from "../state/app.state"
import { GenresState } from "../state/genres.state"

const selectGenres = (state: AppState) => state.genres
export const selectselectGenres = createSelector(
    selectGenres,
    (state: GenresState) => state.genres
)