import { call, put } from "redux-saga/effects";
import { addEmployee } from "../../../services/api";
import {
  addNewEmployeeFailed,
  addNewEmployeeSuccess,
} from "../../actions/actions";

function* AddEmployeeWorkerSaga(action: any) {
  try {
    const response: object = yield call(addEmployee, action.payload);
    yield put(addNewEmployeeSuccess(response));
  } catch (error: any) {
    yield put(addNewEmployeeFailed(error));
  }
}

export default AddEmployeeWorkerSaga;
