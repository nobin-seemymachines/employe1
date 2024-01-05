import { takeLatest } from "redux-saga/effects";
import {
  handleToggleLoginPage,
  handleToggleRegisterPage,
} from "./togglePageWorkerSaga";
import { TOGGLE_LOGIN_PAGE, TOGGLE_REGISTER_PAGE } from "../../actions/actions";

export function* togglePageWatcherSaga() {
  yield takeLatest(TOGGLE_LOGIN_PAGE, handleToggleLoginPage);
  yield takeLatest(TOGGLE_REGISTER_PAGE, handleToggleRegisterPage);
}
