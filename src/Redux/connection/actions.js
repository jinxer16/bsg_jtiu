import { loadWeb3 } from "../../apis/api";
import { ActionTypes } from "../types";

export const connectionAction = () => {
  return async (dispatch) => {
    let acc = await loadWeb3();
    let myAcc;
    if (acc === "No Wallet") {
      myAcc = "No Wallet";
    }  else if (acc === "Wrong Network") {
      myAcc = "Wrong Network";
    }  else {
      myAcc = acc;
    }
    await dispatch({ type: ActionTypes.CONNECT, payload: myAcc });
  };
};


