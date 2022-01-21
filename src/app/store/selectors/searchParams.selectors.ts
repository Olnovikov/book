import { createSelector } from "@ngrx/store"
import { SearchParams } from "src/app/interfaces/searchParams"
import { AppState } from "../state/app.state"


const selectSearchParams = (state: AppState) => state.searchParams
export const selectselectSearchParams = createSelector(
    selectSearchParams,
    (searchParams: SearchParams | null) => searchParams
)