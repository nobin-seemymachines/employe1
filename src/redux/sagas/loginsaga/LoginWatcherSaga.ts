import { takeLatest } from "redux-saga/effects";
import { LOGIN_REQUEST } from "../../actiontypes/actionTypes";
import LoginWorkerSaga from "./LoginWorkerSaga";

export function* LoginwatcherSaga() {
    yield takeLatest(LOGIN_REQUEST, LoginWorkerSaga);
  }
  