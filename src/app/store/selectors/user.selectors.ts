import { createSelector } from "@ngrx/store"
import { AppState } from "../state/app.state"
import { UserState } from "../state/user.state"
const selectUser = (state: AppState) => state.user
export const selectselectUser = createSelector(
    selectUser,
    (state: UserState) => state.user
)