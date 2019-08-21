import React, { useState } from 'react';

function TodoForm({onAdd}) {

    const [value, setValue] = useState('');

    const createTodo = e => {
        let todo = {
            text: value,
            isComplicated: false
        }

        onAdd(todo)

        setValue('');
    }

    return (
        <div className="todo">
            <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Enter here"/>
            <button onClick={createTodo}>Add</button>
        </div>
    );
}

export default TodoForm;