import { CharactersResponse } from '../../types/characters'
import { GET_CHARACTER, GET_CHARACTERS, SET_CHARACTER, SET_CHARACTERS } from './actionNames'

export const getCharacters = (payload: number) => ({
  type: GET_CHARACTERS,
  payload
})

export const setCharacters = (payload: CharactersResponse) => ({
  type: SET_CHARACTERS,
  payload
})

export const getCharacter = (payload: number) => ({
  type: GET_CHARACTER,
  payload
})

export const setCharacter = (payload: CharactersResponse) => ({
  type: SET_CHARACTER,
  payload
})
