import { takeLatest } from "redux-saga/effects";
import LoginWorkerSaga from "./LoginWorkerSaga";
import { LOGIN_REQUEST } from "../../actions/actions";

export function* LoginWatcherSaga() {
    yield takeLatest(LOGIN_REQUEST, LoginWorkerSaga);
  }
  