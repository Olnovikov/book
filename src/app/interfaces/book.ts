import { Genre } from "./genre";

export interface Book {
    name: string,
    author: string,
    year: number,
    genres: Genre[],
    description?: string,
    id: number
}
