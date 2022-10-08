import React, {useState} from 'react';
//import './App.css';
import './Todo.js';

function TodoForm({addTodo}) {
    const[value, setValue] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue('');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="input" 
          value={value} 
          placeholder="Add Todo..."
          onChange={e => setValue(e.target.value)}></input>
      </form>
    )
  }

  export default TodoForm;