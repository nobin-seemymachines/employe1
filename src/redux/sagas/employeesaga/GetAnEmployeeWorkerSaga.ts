import { call, put } from "redux-saga/effects";
import { getAnEmployeeFail, getAnEmployeeSuccess } from "../../actions/actions";
import { getEmployee } from "../../../services/api";

function* GetAnEmployeeWorkerSaga(action: any) {
  try {
    const response: object = yield call(getEmployee, action.payload);
    yield put(getAnEmployeeSuccess(response));
  } catch (error: any) {
    yield put(getAnEmployeeFail(error));
  }
}

export default GetAnEmployeeWorkerSaga;
