import React from 'react';
import TodoFormContainer from "./container";
import { TodoFormInterface } from './interfases';

const TodoForm: React.FC<TodoFormInterface> = (props) => <TodoFormContainer {...props}/>

export default TodoForm;