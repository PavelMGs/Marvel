import { CharactersResponse } from '../../types/characters'
import { GET_CHARACTERS, SET_CHARACTERS } from './actionNames'

export const getCharacters = (payload: number) => ({
  type: GET_CHARACTERS,
  payload
})

export const setCharacters = (payload: CharactersResponse) => ({
  type: SET_CHARACTERS,
  payload
})
