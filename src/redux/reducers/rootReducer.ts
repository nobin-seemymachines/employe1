import { combineReducers } from "redux";
import userReducer from "./userReducer";
import togglePageReducer from "./togglePageReducer";
import ListemployeeReducer from "./ListemployeeReducer";
import employeeReducer from "./employeeReducer";

const rootReducer:any = combineReducers({
  user:userReducer,
  Listemployee:ListemployeeReducer,
  page:togglePageReducer,
  employee:employeeReducer,
});

export default rootReducer;
