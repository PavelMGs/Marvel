import { all } from 'redux-saga/effects'
import { watchGetCharacter } from './character'
import { watchGetCharacters } from './characters'

function * rootSaga () {
  yield all([
    watchGetCharacters(),
    watchGetCharacter()
  ])
}

export default rootSaga
