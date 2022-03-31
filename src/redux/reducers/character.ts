import { HYDRATE } from 'next-redux-wrapper'
import { SET_CHARACTER } from '../actions/actionNames'

const characterReducer = (state = {}, action: any) => {
  switch (action.type) {
    case SET_CHARACTER:
      return { ...state, ...action.payload }
    case HYDRATE: {
      return { ...state, ...action.payload.character }
    }
    default:
      return state
  }
}

export default characterReducer
