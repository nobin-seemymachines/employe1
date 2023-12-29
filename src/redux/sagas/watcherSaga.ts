import { all } from "axios";
import { LoginwatcherSaga } from "./loginsaga/LoginWatcherSaga";


function* watcherSaga(){
    yield all([
        LoginwatcherSaga(),
    ]);
}

export default watcherSaga;