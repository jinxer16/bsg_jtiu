import { ActionTypes } from "../types";

const INITIAL_STATE = {
  withdrawDetail: {},
  all_val:"",
  split:"",
  status:false
};

const withdrawInfoReduce = (state = INITIAL_STATE, {type, payload,payload1,payload2, payload3}) => {
  switch (type) {
    case ActionTypes.WITHDRAW_INFO:
      return {
        ...state,
        withdrawDetail: payload,
        all_val: payload1,
        split:payload2,
        status:payload3
      };
    default:
      return state;
  }
};
export default withdrawInfoReduce;
