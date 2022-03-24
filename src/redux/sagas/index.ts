import { all } from 'redux-saga/effects'
import getCharacters from './characters';

function* rootSaga() {
  yield all([
    getCharacters()
  ])
}

export default rootSaga