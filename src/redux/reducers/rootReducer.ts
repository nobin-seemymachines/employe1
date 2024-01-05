import { combineReducers } from "redux";
import userReducer from "./userReducer";
import employeeReducer from "./employeeReducer";
import togglePageReducer from "./togglePageReducer";

const rootReducer:any = combineReducers({
  user:userReducer,
  employee:employeeReducer,
  page:togglePageReducer,
});

export default rootReducer;
