import { applyMiddleware, createStore, Store } from 'redux';
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware, { Task } from "redux-saga";
import rootSaga from "./sagas";
import reducers from "./reducers";
import { CharactersResponse } from '../types/characters';

export type RootState = {
  state:{
    characters: CharactersResponse;
    tick: string;
  }
} 

 interface SagaStore extends Store {
  sagaTask?: Task;
}

export const sagaMiddleware = createSagaMiddleware();

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducers, applyMiddleware(sagaMiddleware));
  
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(makeStore, { debug: false });

export default wrapper;
