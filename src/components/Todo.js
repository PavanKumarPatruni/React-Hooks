import React from 'react';

function Todo({index, todo, onComplete, onRemove}) {
    return (
        <div className="todo">
            <span className={todo.isCompleted ? 'complete' : ''}>{todo.text}</span>
            <button onClick={() => onComplete(index)}>{todo.isCompleted ? 'Completed' : 'Complete'}</button>
            <button onClick={() => onRemove(index)}>X</button>
        </div>
    );
}

export default Todo;