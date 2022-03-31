import { put, call, takeEvery } from 'redux-saga/effects';
import { GET_CHARACTERS } from '../actions/actionNames';
import { setCharacters } from '../actions/characters'
import API from '../API';

function* getCharacters({ payload }: { type: string, payload: number }): any {
  const data = yield call(API.get, '/v1/public/characters', { offset: 20 * payload });
  yield put(setCharacters(data));
}

export function* watchGetCharacters() {
  yield takeEvery(GET_CHARACTERS, getCharacters);
}
