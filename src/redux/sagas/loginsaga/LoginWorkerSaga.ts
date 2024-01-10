import { call, put } from "redux-saga/effects";
import { loginFailure, loginSuccess } from "../../actions/actions";
import { signIn } from "../../../services/api";

function* LoginWorkerSaga(action: any) {
  try {
    const response: object = yield call(signIn, action.payload);
    yield put(loginSuccess(response));
  } catch (error: any) {
    yield put(loginFailure(error.response));
  }
}

export default LoginWorkerSaga;
