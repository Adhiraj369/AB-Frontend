// src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
    return (
        <ul>
            {todos.map((todo, index) => (

                <TodoItem key={index} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoList;
