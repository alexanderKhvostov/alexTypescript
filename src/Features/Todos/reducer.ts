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
import { IAction, ITodo, ITodosState } from "./interfaces";

const initialState: ITodosState = {
  error: "",
  loading: false,
  todos: [],
};

const todos = (state = initialState, action: IAction) => {
  const { type, todo, error, todos, id } = action;
  switch (type) {
    case SET_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SET_TODOS_SUCCESS:
      return {
        ...state,
        todos: todos || [],
        loading: false,
      };
    case SET_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case CREATE_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_TODO_SUCCESS:
      return {
        ...state,
        todos: [todo, ...state.todos],
        loading: false,
      };
    case CREATE_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error,
      };
    case UPDATE_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === id ? { ...t, completed: !t.completed } : t
        ),
        loading: false,
      };
    case UPDATE_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error,
      };
    case DELETE_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((t: ITodo) => t.id !== id),
        loading: false,
      };
    case DELETE_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error,
      };
    default:
      return state;
  }
};

export default todos;
