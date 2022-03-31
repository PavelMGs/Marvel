import { HYDRATE } from 'next-redux-wrapper'
import { SET_CHARACTERS } from '../actions/actionNames'

const charactersReducer = (state = {}, action: any) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return { ...state, ...action.payload }
    case HYDRATE: {
      return { ...state, ...action.payload.characters }
    }
    default:
      return state
  }
}

export default charactersReducer
