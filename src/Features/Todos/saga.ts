import * as Eff from "redux-saga/effects";
import {
  DELETE_TODO_REQUEST,
  CREATE_TODO_REQUEST,
  SET_TODOS_REQUEST,
  UPDATE_TODO_REQUEST,
} from "./actionsTypes";
import {
  createTodoSuccess,
  createTodoFailure,
  deleteTodoSuccess,
  deleteTodoFailure,
  setTodosSuccess,
  updateTodoSuccess,
  updateTodoFailure,
} from "./actionsCreator";

import { ITodo } from "./interfaces";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const fork: any = Eff.fork;
const put: any = Eff.put;
const take: any = Eff.take;
const all: any = Eff.all;

export function* fetchTodos() {
  while (true) {
    try {
      yield take(SET_TODOS_REQUEST);
      const todos: ITodo[] = JSON.parse(localStorage.getItem("todos") || "[]");
      yield delay(700);
      yield put(setTodosSuccess(todos));
    } catch (error) {
      yield put(createTodoFailure(error));
    }
  }
}

export function* createTodoAction() {
  while (true) {
    try {
      const { todo } = yield take(CREATE_TODO_REQUEST);
      yield delay(700);
      yield put(createTodoSuccess(todo));
    } catch (error) {
      yield put(createTodoFailure(error));
    }
  }
}

export function* updateTodoAction() {
  while (true) {
    try {
      const { id } = yield take(UPDATE_TODO_REQUEST);
      yield delay(700);
      console.log(11);
      yield put(updateTodoSuccess(id));
    } catch (error) {
      yield put(updateTodoFailure(error));
    }
  }
}

export function* deleteTodoAction() {
  while (true) {
    try {
      const { id } = yield take(DELETE_TODO_REQUEST);
      yield delay(700);
      yield put(deleteTodoSuccess(id));
    } catch (error) {
      yield put(deleteTodoFailure(error));
    }
  }
}

export function* todosSaga() {
  yield all([
    fork(fetchTodos),
    fork(createTodoAction),
    fork(deleteTodoAction),
    fork(updateTodoAction),
  ]);
}
