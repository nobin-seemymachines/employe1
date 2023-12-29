import { signIn } from "../../../services/api";
import { call, put } from "redux-saga/effects";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../../actiontypes/actionTypes";

function* LoginWorkerSaga(action: any) {
  try {
    const userData = action.payload;
    const response: object = yield call(signIn,userData);
    yield put({ type: LOGIN_SUCCESS, data: response });
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, error });
  }
}

export default LoginWorkerSaga;
