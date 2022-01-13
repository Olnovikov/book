import { User } from "src/app/interfaces/user";

export interface UserState {

    user: User | null
}

export const initialUserState: UserState = { user: null }
