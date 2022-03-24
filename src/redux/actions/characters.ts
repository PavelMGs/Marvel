import { GET_CHARACTERS, SET_CHARACTERS } from "./actionNames"

export const getCharacters = () => ({
  type: GET_CHARACTERS,
});

export const setCharacters = (payload: CharactersStore) => ({
  type: SET_CHARACTERS,
  payload,
});
