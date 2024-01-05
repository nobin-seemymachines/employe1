import { call, put } from "redux-saga/effects";
import { getEmployeeList } from "../../../services/api";
import { getEmployeeListFail, getEmployeeListSuccess } from "../../actions/actions";

function* EmployeeWorkerSaga() {
  try {
    const response: object = yield call(getEmployeeList);
    yield put(getEmployeeListSuccess(response));
  } catch (error:any) {
    yield put(getEmployeeListFail())
  }
}

export default EmployeeWorkerSaga;
