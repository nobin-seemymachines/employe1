import { takeLatest } from "redux-saga/effects";
import EmployeeWorkerSaga from "./EmployeeWorkerSaga";
import {
  ADD_EMPLOYEE,
  EDIT_EMPLOYEE,
  EMPLOYEE_LIST_REQUEST,
} from "../../actions/actions";
import {
  addEmployeeWorkerSaga,
  editEmployeeWorkerSaga,
} from "./AddEditEmployeeWokerSaga";

export function* EmployeeWatcherSaga() {
  yield takeLatest(EMPLOYEE_LIST_REQUEST, EmployeeWorkerSaga);
  yield takeLatest(ADD_EMPLOYEE, addEmployeeWorkerSaga);
  yield takeLatest(EDIT_EMPLOYEE, editEmployeeWorkerSaga);
}
