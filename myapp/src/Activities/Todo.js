import React from 'react';
//import "./App.css";
import "./TodoForm.js";

function Todo ({ todo, index, completeTodo, removeTodo}) {
    return (
        <div 
          style= {{textDecoration: todo.isCompleted ? 'line-through' : ''}}
          className="todo">
            {todo.text}
            <div>
              <button onClick={() => completeTodo(index)}> Complete </button>
              <button onClick={() => removeTodo(index)}> x </button>
            </div>
        </div>
    )
}

export default Todo;