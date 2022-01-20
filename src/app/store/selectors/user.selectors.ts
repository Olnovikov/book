import { createSelector } from "@ngrx/store"
import { User } from "src/app/interfaces/user"
import { AppState } from "../state/app.state"

const selectUser = (state: AppState) => state.user
export const selectselectUser = createSelector(
    selectUser,
    (user: User | null) => user
)