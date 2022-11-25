import { ActionTypes } from "../types";

const INITIAL_STATE = {
  withdrawDetail: {},
  all_val:"",
};

const withdrawInfoReduce = (state = INITIAL_STATE, {type, payload,payload1}) => {
  switch (type) {
    case ActionTypes.WITHDRAW_INFO:
      return {
        ...state,
        withdrawDetail: payload,
        all_val: payload1
      };
    default:
      return state;
  }
};
export default withdrawInfoReduce;
