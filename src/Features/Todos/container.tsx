import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TodoForm from '../../Features/Todos/TodoForm';
import TodoList from '../../Features/Todos/TodoList';
import { ITodo, ITodosState } from './interfaces';
import rootStateInterface from '../../core/rootStateInterface';
import { fetchTodos, createTodoAction, deleteTodoAction } from './actions';


const TodosPageContainer = () => {
    const { todos }: ITodosState = useSelector((state: rootStateInterface) => state.todos);

    useEffect(() => {
        fetchTodos()
    }, [])

    const handleFormSubmit = (title: string) => {
        const newTodo: ITodo = {
            title,
            id: Date.now(),
            completed: false,
        }
        createTodoAction(newTodo)
    }

    const handleTodoComplete = (id: number) => {
        console.log(id)
    }

    const handleTodoDelete = (id: number) => {
        deleteTodoAction(id)
    }

    return (
        <div className="todos-page">
            <TodoForm onFormSubmit={handleFormSubmit} />
            <TodoList onComplete={handleTodoComplete} onDelete={handleTodoDelete} todos={todos} />
        </div>
    )
}

export default TodosPageContainer;