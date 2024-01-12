import { call, put } from "redux-saga/effects";
import { getEmployeeListFail, getEmployeeListSuccess } from "../../actions/actions";
import { getEmployeeList } from "../../../services/api";

function* ListEmployeeWorkerSaga() {
  try {
    const response: object = yield call(getEmployeeList);
    yield put(getEmployeeListSuccess(response));
  } catch (error:any) {
    yield put(getEmployeeListFail())
  }
}

export default ListEmployeeWorkerSaga;
