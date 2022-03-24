import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import charactersReducer from "./characters";

const wrapperReducer = (state = { tick: 'init' }, action: any) => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation..
      return { ...state, ...action.payload };
    case 'TICK':
      return { ...state, tick: action.payload };
    default:
      return state;
  }
};

const reducers = combineReducers({
  state: wrapperReducer,
  characters: charactersReducer,
});

export default reducers;
