import {
  SET_TODOS_REQUEST,
  SET_TODOS_SUCCESS,
  SET_TODOS_FAILURE,
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAILURE,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
} from "./actionsTypes";
import { ITodo } from "./interfaces";

export const setTodosRequest = () => ({ type: SET_TODOS_REQUEST });
export const setTodosSuccess = (todos: ITodo[]) => ({
  type: SET_TODOS_SUCCESS,
  todos,
});
export const setTodosFailure = (error: string) => ({
  type: SET_TODOS_FAILURE,
  error,
});

export const createTodoRequest = (todo: ITodo) => ({
  type: CREATE_TODO_REQUEST,
  todo,
});
export const createTodoSuccess = (todo: ITodo) => ({
  type: CREATE_TODO_SUCCESS,
  todo,
});
export const createTodoFailure = (error: string) => ({
  type: CREATE_TODO_FAILURE,
  error,
});

export const updateTodoRequest = (id: number) => ({
  type: UPDATE_TODO_REQUEST,
  id,
});

export const updateTodoSuccess = (id: number) => ({
  type: UPDATE_TODO_SUCCESS,
  id,
});

export const updateTodoFailure = (error: string) => ({
  type: UPDATE_TODO_FAILURE,
  error,
});

export const deleteTodoRequest = (id: number) => ({
  type: DELETE_TODO_REQUEST,
  id,
});
export const deleteTodoSuccess = (id: number) => ({
  type: DELETE_TODO_SUCCESS,
  id,
});
export const deleteTodoFailure = (error: string) => ({
  type: DELETE_TODO_FAILURE,
  error,
});
