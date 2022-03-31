import { put, call, takeEvery } from 'redux-saga/effects'
import { GET_CHARACTER } from '../actions/actionNames'
import { setCharacter } from '../actions/characters'
import API from '../API'

function * getCharacter ({ payload }: { type: string; payload: number }): any {
  const data = yield call(API.get, `/v1/public/characters/${payload}`)
  yield put(setCharacter(data))
}

export function * watchGetCharacter () {
  yield takeEvery(GET_CHARACTER, getCharacter)
}
