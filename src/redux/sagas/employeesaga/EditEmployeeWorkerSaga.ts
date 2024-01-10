import { call, put } from "redux-saga/effects";
import { editEmployee } from "../../../services/api";
import {
  editAnEmployeeFailed,
  editAnEmployeeSuccess,
} from "../../actions/actions";

function* EditEmployeeWorkerSaga(action: any) {
  try {
    const response: object = yield call(editEmployee, action.payload);
    yield put(editAnEmployeeSuccess(response));
  } catch (error: any) {
    yield put(editAnEmployeeFailed(error));
  }
}
export default EditEmployeeWorkerSaga;
