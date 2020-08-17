import { put } from "redux-saga/effects";
import {
  createTodoRequest,
  createTodoSuccess,
  createTodoFailure,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoFailure,
  setTodosRequest,
  setTodosSuccess,
} from "./actionsCreator";

import { ITodo } from "./interfaces";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function* fetchTodos() {
  try {
    yield put(setTodosRequest());
    const todos: ITodo[] = JSON.parse(localStorage.getItem("todos") || "[]");
    yield delay(700);
    yield put(setTodosSuccess(todos));
  } catch (error) {
    yield put(createTodoFailure(error));
  }
}

export function* createTodoAction(todo: ITodo) {
  try {
    yield put(createTodoRequest());
    yield delay(700);
    yield put(createTodoSuccess(todo));
  } catch (error) {
    yield put(createTodoFailure(error));
  }
}

export function* deleteTodoAction(id: number) {
  try {
    yield put(deleteTodoRequest());
    yield delay(700);
    yield put(deleteTodoSuccess(id));
  } catch (error) {
    yield put(deleteTodoFailure(error));
  }
}
