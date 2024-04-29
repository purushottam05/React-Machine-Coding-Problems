import React, {useState} from 'react'

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState([]);

  const toggle = () => {
    setTasks(...tasks, newTask);
    setNewTask('');
  }

  return(
    <div>
    <h1>ToDo List</h1>
    <input
    type ='text'
    value = {setTasks}
    onChange = {(e) =>{e.value.element}}
    ></input>


    <button onClick = {toggle} > Add</button>
    </div>


  )
}

export default Todo