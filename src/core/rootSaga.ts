import { all, fork } from "redux-saga/effects";
import { todosSaga } from "../Features/Todos/saga";
export function* rootSaga() {
  yield all([
    fork(todosSaga),
  ]);
}
