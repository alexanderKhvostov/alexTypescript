import React from 'react';
import { TodoListInterface } from './interfases';

const TodoListContainer: React.FC<TodoListInterface> = ({ todos, onDelete, onComplete }) => {

  if (todos.length === 0) {
    return(
      <p className="center">You don't have tasks</p>
    )
  }
  return (
    <ul>
      {todos.map((todo) => (
        <li className="todo mb1" key={todo.id}>
          <label>
            <input onChange={() => onComplete(todo.id)} value={todo.complete} checked={todo.completed} type="checkbox" />
            <span>{todo.title}</span>
            <i onClick={() => onDelete(todo.id)} className="material-icons delete red-text">delete</i>
          </label>
        </li>
      ))}
    </ul>
  )
}

export default TodoListContainer;