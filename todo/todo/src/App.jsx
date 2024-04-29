import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleMoveToInProgress = (index) => {
    const todoToMove = todos[index];
    setTodos(todos.filter((_, i) => i !== index));
    if (todoToMove.trim() !== '') {
      setInProgress([...inProgress, todoToMove]);
    }
  };

  const handleMoveToCompleted = (index) => {
    const todoToMove = inProgress[index];
    setInProgress(inProgress.filter((_, i) => i !== index));
    if (todoToMove.trim() !== '') {
      setCompleted([...completed, todoToMove]);
    }
  };

  const handleMoveToTodo = (index) => {
    const todoToMove = completed[index];
    setCompleted(completed.filter((_, i) => i !== index));
    if (todoToMove.trim() !== '') {
      setTodos([...todos, todoToMove]);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h2>Todo</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your task..."
        />
        <button onClick={handleAddTodo}>Add</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => handleMoveToInProgress(index)}>Move to In Progress</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="container">
        <h2>In Progress</h2>
        <ul>
          {inProgress.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleMoveToCompleted(index)}>Move to Completed</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="container">
        <h2>Completed</h2>
        <ul>
          {completed.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleMoveToTodo(index)}>Move to Todo</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
