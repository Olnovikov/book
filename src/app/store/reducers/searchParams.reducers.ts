import { createReducer, on } from "@ngrx/store";
import { saveSearchParams } from "../actions/searchParams.actions";
import { initialSearachParamsState } from "../state/searchParams.state";

export const searchParamsReducers = createReducer(
  initialSearachParamsState,
  on(saveSearchParams, (searchParams, action) => searchParams = action.payload)
)

