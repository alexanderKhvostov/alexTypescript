import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoForm from '../../Features/Todos/TodoForm';
import TodoList from '../../Features/Todos/TodoList';
import { ITodo, ITodosState } from './interfaces';
import rootStateInterface from '../../core/rootStateInterface';
import { deleteTodoRequest, createTodoRequest, setTodosRequest, updateTodoRequest } from './actionsCreator';


const TodosPageContainer = () => {
    const { todos, loading }: ITodosState = useSelector((state: rootStateInterface) => state.todos);
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(setTodosRequest())
    }, [dispatch])

    const handleFormSubmit = (title: string) => {
        const newTodo: ITodo = {
            title,
            id: Date.now(),
            completed: false,
        }
        dispatch(createTodoRequest(newTodo))
    }

    const handleTodoComplete = (id: number) => {
        dispatch(updateTodoRequest(id))
    }

    const handleTodoDelete = (id: number) => {
        dispatch(deleteTodoRequest(id))
    }

    return (
        <div className="todos-page">
            <TodoForm onFormSubmit={handleFormSubmit} />
            <TodoList onComplete={handleTodoComplete} onDelete={handleTodoDelete} todos={todos} />
            {loading && "Loading...."}
        </div>
    )
}

export default TodosPageContainer;