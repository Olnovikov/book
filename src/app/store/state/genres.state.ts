import { Genre } from "src/app/interfaces/genre";

export interface GenresState {

  genres:Genre[]
  }

  export const initialGenresState:GenresState = {genres:[]}
