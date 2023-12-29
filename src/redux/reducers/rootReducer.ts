import { combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer:any = combineReducers({
  user:userReducer,
});

export default rootReducer;
