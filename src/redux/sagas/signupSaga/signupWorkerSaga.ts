import { call, put } from "redux-saga/effects";
import { signUp } from "../../../services/api";
import { signupFailure, signupSuccess } from "../../actions/actions";

function* signupWorkerSaga(action: any) {
  try {
    const response: object = yield call(signUp, action.payload);
    yield put(signupSuccess(response));
  } catch (error: any) {
    yield put(signupFailure(error.response));
  }
}

export default signupWorkerSaga
