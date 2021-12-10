import { Genre } from "./genre";

export interface SearchParams {
    name: string,
    author: string,
    yearFrom: number,
    yearTo: number,
    genres: Genre[],
}
