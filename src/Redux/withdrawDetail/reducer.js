import { ActionTypes } from "../types";

const INITIAL_STATE = {
  withdrawDetail: {},
  all_val:"",
  split:""
};

const withdrawInfoReduce = (state = INITIAL_STATE, {type, payload,payload1,payload2}) => {
  switch (type) {
    case ActionTypes.WITHDRAW_INFO:
      return {
        ...state,
        withdrawDetail: payload,
        all_val: payload1,
        split:payload2
      };
    default:
      return state;
  }
};
export default withdrawInfoReduce;
