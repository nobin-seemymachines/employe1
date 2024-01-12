import { takeLatest } from "redux-saga/effects";
import ListEmployeeWorkerSaga from "./ListEmployeeWorkerSaga";
import {
  ADD_NEW_EMPLOYEE,
  DELETE_EMPLOYEE_REQUEST,
  EDIT_EMPLOYEE,
  EMPLOYEE_LIST_REQUEST,
  GET_AN_EMPLOYEE,
} from "../../actions/actions";

import AddEmployeeWorkerSaga from "./AddEmployeeWorkerSaga";
import { DeleteEmployeeWorkerSaga } from "./DeleteEmployeeWorkerSaga";
import EditEmployeeWorkerSaga from "./EditEmployeeWorkerSaga";
import GetAnEmployeeWorkerSaga from "./GetAnEmployeeWorkerSaga";

export function* EmployeeWatcherSaga() {
  yield takeLatest(EMPLOYEE_LIST_REQUEST, ListEmployeeWorkerSaga);
  yield takeLatest(ADD_NEW_EMPLOYEE, AddEmployeeWorkerSaga);
  yield takeLatest(EDIT_EMPLOYEE, EditEmployeeWorkerSaga);
  yield takeLatest(DELETE_EMPLOYEE_REQUEST, DeleteEmployeeWorkerSaga);
  yield takeLatest(GET_AN_EMPLOYEE, GetAnEmployeeWorkerSaga);
}
