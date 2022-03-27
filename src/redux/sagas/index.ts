import { all } from 'redux-saga/effects'
import { watchGetCharacters } from './characters'

function * rootSaga () {
  yield all([
    watchGetCharacters()
  ])
}

export default rootSaga
