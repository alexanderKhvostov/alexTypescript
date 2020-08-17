import * as Eff from "redux-saga/effects";

import {
  createTodoSuccess,
  createTodoFailure,
  deleteTodoSuccess,
  deleteTodoFailure,
  setTodosSuccess,
} from "./actionsCreator";

import { ITodo } from "./interfaces";
import { DELETE_TODO_REQUEST, CREATE_TODO_REQUEST, SET_TODOS_REQUEST } from "./actionsTypes";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const fork: any = Eff.fork;
const put: any = Eff.put;
const take: any = Eff.take;
const all: any = Eff.all;

export function* fetchTodos() {
  try {
    yield take(SET_TODOS_REQUEST);
    const todos: ITodo[] = JSON.parse(localStorage.getItem("todos") || "[]");
    yield delay(700);
    yield put(setTodosSuccess(todos));
  } catch (error) {
    yield put(createTodoFailure(error));
  }
}

export function* createTodoAction() {
  try {
    const { todo } = yield take(CREATE_TODO_REQUEST);
    yield delay(700);
    yield put(createTodoSuccess(todo));
  } catch (error) {
    yield put(createTodoFailure(error));
  }
}

export function* deleteTodoAction() {
  try {
    const { deletedId } = yield take(DELETE_TODO_REQUEST);
    yield delay(700);
    yield put(deleteTodoSuccess(deletedId));
  } catch (error) {
    yield put(deleteTodoFailure(error));
  }
}

export function* todosSaga() {
  yield all([fork(fetchTodos), fork(createTodoAction), fork(deleteTodoAction)]);
}
