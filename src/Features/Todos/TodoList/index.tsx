import React from 'react';
import TodoListContainer from "./container";
import './styles.scss'
import { TodoListInterface } from './interfases';
const TodoList: React.FC<TodoListInterface> = (props)=> <TodoListContainer {...props}/>

export default TodoList;