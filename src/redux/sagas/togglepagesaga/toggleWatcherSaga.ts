import { takeLatest } from "redux-saga/effects";
import {
  ADD_EMPLOYEE_PAGE,
  EDIT_EMPLOYEE_PAGE,
  TOGGLE_LOGIN_PAGE,
  TOGGLE_REGISTER_PAGE,
} from "../../actions/actions";
import {
  handleToggleLoginPage,
  handleToggleRegisterPage,
} from "./togglePageWorkerSaga";
import {
  addEmployeePageWorkerSaga,
  editEmployeePageWorkerSaga,
} from "./AddEditEmployeePageWokerSaga";

export function* togglePageWatcherSaga() {
  yield takeLatest(TOGGLE_LOGIN_PAGE, handleToggleLoginPage);
  yield takeLatest(TOGGLE_REGISTER_PAGE, handleToggleRegisterPage);
  yield takeLatest(ADD_EMPLOYEE_PAGE, addEmployeePageWorkerSaga);
  yield takeLatest(EDIT_EMPLOYEE_PAGE, editEmployeePageWorkerSaga);
}
