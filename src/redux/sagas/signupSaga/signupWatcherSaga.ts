import { takeLatest } from "redux-saga/effects";
import { SIGNUP_REQUEST } from "../../actions/actions";
import signupWorkerSaga from "./signupWorkerSaga";

export function* signupWatcherSaga(){
    yield takeLatest(SIGNUP_REQUEST,signupWorkerSaga)
}