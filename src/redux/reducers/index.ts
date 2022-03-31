import { combineReducers } from 'redux'
import characterReducer from './character'
import charactersReducer from './characters'

const reducers = combineReducers({
  characters: charactersReducer,
  character: characterReducer
})

export default reducers
