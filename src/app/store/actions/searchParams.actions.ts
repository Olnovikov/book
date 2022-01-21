import { createAction } from "@ngrx/store";
import { SearchParams } from "src/app/interfaces/searchParams";

export const saveSearchParams = createAction('[SearchParams] saveSearchParams', function prepare(searchParams: SearchParams | null) {
    return {
        payload: searchParams
    }
})



