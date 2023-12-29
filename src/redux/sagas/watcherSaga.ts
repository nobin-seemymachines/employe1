import { all } from "redux-saga/effects";
import { LoginWatcherSaga } from "./loginsaga/LoginWatcherSaga";

function* watcherSaga(){
    yield all([
        LoginWatcherSaga()
    ]);
}

export default watcherSaga;