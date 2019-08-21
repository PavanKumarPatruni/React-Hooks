import React, { useState } from 'react';

import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {

    const [todos, setTodos] = useState([
        {
            text: "Order Groceries",
            isCompleted: false
        },
        {
            text: "Call medical shop order medicines",
            isCompleted: false
        },
        {
            text: "Get medicines",
            isCompleted: false
        }
    ]);

    const onAdd = todo => {
        let newTodos = [...todos, todo];

        setTodos(newTodos);
    }

    const onComplete = index => {
        let newTodos = [...todos];
        newTodos[index].isCompleted = true

        setTodos(newTodos);
    }

    const onRemove = index => {
        let newTodos = [...todos];
        newTodos.splice(index, 1);

        setTodos(newTodos);
    }

    return(
        <div className="app">
            <div className="title">TODO</div>
            <div className="todo-list">
            {
                todos.map((todo, index) => (
                    <Todo key={index} index={index} todo={todo} onRemove={onRemove} onComplete={onComplete}/>
                ))
            }
            </div>
            <TodoForm onAdd={onAdd}/> 
        </div>
    );
}

export default TodoList;