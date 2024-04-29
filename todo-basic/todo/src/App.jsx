
import React, { useState } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, complete: false }]);
      setNewTask('');
    }
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
