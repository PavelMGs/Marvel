import { SET_CHARACTERS } from "../actions/actionNames";

const charactersReducer = (state = {}, action: any) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return { ...state, ...action.payload.data };
    default:
      return state;
  }
};

export default charactersReducer;
