import { ActionTypes } from "../types";

const INITIAL_STATE = {
  remaintime: Date.now(),
};

const remaintimeReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case ActionTypes.REMAIN_TIME:
      return {
        ...state,
        remaintime: payload,
      };
    default:
      return state;
  }
};
export default remaintimeReducer;
