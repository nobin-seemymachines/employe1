import { call, put } from "redux-saga/effects";
import { deleteEmployee } from "../../../services/api";
import {
  deleteEmployeeFailed,
  deleteEmployeeSuccess,
} from "../../actions/actions";

export function* DeleteEmployeeWorkerSaga(action: any) {
  try {
    const response: object = yield call(deleteEmployee, action.payload);
    yield put(deleteEmployeeSuccess(response));
  } catch (error: any) {
    yield put(deleteEmployeeFailed(error));
  }
}
