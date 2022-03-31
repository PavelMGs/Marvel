import { applyMiddleware, createStore, Store } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import createSagaMiddleware, { Task } from 'redux-saga'
import rootSaga from './sagas'
import reducers from './reducers'
import { CharactersResponse } from '../types/characters'
import { composeWithDevTools } from '@redux-devtools/extension'

export type RootState = {
  characters: CharactersResponse;
  character: CharactersResponse;
}

 interface SagaStore extends Store {
  sagaTask?: Task;
}

export const sagaMiddleware = createSagaMiddleware()

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

const wrapper = createWrapper(makeStore, { debug: false })

export default wrapper
