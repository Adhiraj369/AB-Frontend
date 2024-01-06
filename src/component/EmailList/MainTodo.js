// MainTodo.js
import React, { useState } from 'react';

const MainTodo = ({ addTodo }) => {
    const [input, setInput] = useState('');

    const handleAddTodo = () => {
        if (input.trim() !== '') {
            addTodo(input);
            setInput('');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Add a new to-do"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    );
};

export default MainTodo;
