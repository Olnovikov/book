import { Action } from "@ngrx/store";
import { Book } from "src/app/interfaces/book";

export enum EBooksActions {

  SetBooksList='[Books] setBooksList',
  SetBooksListSuccess='[Books] setBooksListSuccess'

}

export class SetBooksList implements Action{
  public readonly type: EBooksActions.SetBooksList

}
export class SetBooksListSuccess implements Action{
  public readonly type: EBooksActions.SetBooksListSuccess
  constructor(public payload:Book[]){}

}
export type BooksActions=SetBooksList|SetBooksListSuccess
