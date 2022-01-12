import { Action } from "@ngrx/store";
import { Genre } from "src/app/interfaces/genre";

export enum EGenresActions {

  GetGenres='[Genres] getGenres',
  GetGenresSuccess='[Genres] getGenresSuccess'

}

export class  GetGenres implements Action{
  public readonly type: EGenresActions.GetGenres

}

export class  GetGenresSuccess implements Action{
  public readonly type: EGenresActions.GetGenresSuccess
  constructor(public payload:Genre[]){}

}
export type GenresActions=GetGenres|GetGenresSuccess
