import { combineReducers } from "redux";
import connectReducer from "./connection/reducer";
import poolInfoReducer from "./poolInfo/reducer";
import remaintimeReducer from "./remaintime/reducer"
const rootReducer = combineReducers({
  connect: connectReducer,
  poolInfo:poolInfoReducer,
  remaintime:remaintimeReducer
});

export default rootReducer;
