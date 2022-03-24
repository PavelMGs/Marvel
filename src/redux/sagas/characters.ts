import { put, call, take } from 'redux-saga/effects';
import { setCharacters } from '../actions/characters';
import API from '../API';

function* getCharacters(): any {
  yield take('GET_CHARACTERS');
  const data = yield call(API.get, '/v1/public/characters');
  yield put(setCharacters(data));
}

export default getCharacters;
