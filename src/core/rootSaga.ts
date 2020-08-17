import { all, fork } from "redux-saga/effects";
import { todosSaga } from "../Features/Todos/actions";
export function* rootSaga() {
  yield all([
    fork(todosSaga),
  ]);
}
