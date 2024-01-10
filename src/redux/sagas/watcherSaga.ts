import { all } from "redux-saga/effects";
import { LoginWatcherSaga } from "./loginsaga/LoginWatcherSaga";
import { EmployeeWatcherSaga } from "./employeesaga/EmployeeWatcherSaga";
import { signupWatcherSaga } from "./signupSaga/signupWatcherSaga";
import { togglePageWatcherSaga } from "./togglepagesaga/toggleWatcherSaga";

function* watcherSaga() {
  yield all([
    togglePageWatcherSaga(),
    LoginWatcherSaga(),
    signupWatcherSaga(),
    EmployeeWatcherSaga(),
  ]);
}

export default watcherSaga;
