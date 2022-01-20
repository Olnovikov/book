import { createSelector } from "@ngrx/store"
import { Genre } from "src/app/interfaces/genre"
import { AppState } from "../state/app.state"


const selectGenres = (state: AppState) => state.genres
export const selectselectGenres = createSelector(
    selectGenres,
    (genres: Genre[]) => genres
)