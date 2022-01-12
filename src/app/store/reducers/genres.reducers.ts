import { EGenresActions, GenresActions } from "../actions/genres.actions"
import { GenresState, initialGenresState } from "../state/genres.state"

export const genresReducers =(
  state=initialGenresState,
  action:GenresActions):GenresState=>{
    switch(action.type){
      case EGenresActions.GetGenresSuccess:
        return{...state,genres:action.payload}
      default: return state
    }

  }
