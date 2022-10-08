import React, {useState} from 'react';
//import './App.css';
import './Todo.js';
import './TodoForm.js'


function TodoFormM(Todo, TodoForm) {
    const [todos, setTodos] = useState([
        {
            text: 'Learn about React',
            isCompleted: false
        },
        {
            text: 'Learn about lunch',
            isCompleted: false
        },
        {
            text: 'Build really cool todo app',
            isCompleted: false
        },
    ]);

const addTodo = text => {
  const newTodos = [...todos, { text }];
  setTodos(newTodos);
}

const completeTodo = index => {
  const newTodos = [...todos];
  newTodos[index].isCompleted = true;
  setTodos(newTodos);
}

const removeTodo = index => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
}

    return (
        <div className= "app">
            <div className='todo-list'>
                {todos.map((todo, index) => (
                    <Todo 
                      key={index}
                      index={index}
                      todo={todo}
                      completeTodo={completeTodo}
                      removeTodo={removeTodo}/>
                ))}
                <TodoForm addTodo={addTodo}/>
            </div>
        </div>
    )
}

export default TodoFormM;