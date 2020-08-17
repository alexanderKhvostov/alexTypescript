import React, { useState, useEffect } from 'react';
import TodoForm from '../../Features/Todos/TodoForm';
import TodoList from '../../Features/Todos/TodoList';
import { ITodo } from './interfaces';


const TodosPageContainer = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(savedTodos);
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleFormSubmit = (title: string) => {
        const newTodo: ITodo = {
            title,
            id: Date.now(),
            completed: false,
        }
        // setTodos([newTodo, ...todos])
        setTodos(prev => [newTodo, ...prev])
    }

    const handleTodoComplete = (id: number) => {
        setTodos(prev => [...prev.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)])
    }

    const handleTodoDelete = (id: number) => {
        setTodos(prev => [...prev.filter(todo => todo.id !== id)])
    }

    return (
        <div className="todos-page">
            <TodoForm onFormSubmit={handleFormSubmit} />
            <TodoList onComplete={handleTodoComplete} onDelete={handleTodoDelete} todos={todos} />
        </div>
    )
}

export default TodosPageContainer;