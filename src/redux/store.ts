import { createStore, applyMiddleware } from "redux";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootReducer";
import watcherSaga from "./sagas/watcherSaga";

const sagaMiddleware: any = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
