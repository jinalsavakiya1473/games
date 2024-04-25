import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex,setEditIndex]=useState();
  const [editValue,setEditValue]=useState(false)

  const addTask = () => {
    const newTask = inputValue;
    if(editValue == true){
      const newTasks = [...tasks];
      newTasks[editIndex] = inputValue;
      setTasks(newTasks);
      setEditIndex(false);
      setEditValue('');
    }
    else {
      const newTask = inputValue;
      if (newTask !== '') {
        setTasks([...tasks, newTask]);
        setInputValue('');
      }
    }
  };

  const deleteTask = (index) => {
    const newdelet = [...tasks];
    newdelet.splice(index,1);
    setTasks(newdelet);
  };

  const editTask = (index) => {
    setEditIndex(index);
    setEditValue(true);
    setInputValue(tasks[index])
  }

  return (
    <div className='Todo'>
        <Link to="/" className='left'><FaLongArrowAltLeft /></Link>
      <Container>
        <div className="newtask">
          <input value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} type="text" placeholder="Enter a new task..."/>
          <button className="push" onClick={addTask}>{editValue !== false ? 'Save' : 'Add Task'}</button>
        </div>
        <ul className="tasks">
          {tasks.map((task, index) => (
            <div className='d-flex flex-wrap'>
              <li key={index}>
                {task}
                <div>
                  <button className='btn'onClick={()=>editTask(index)}>Edit</button>
                  <button className='btn' onClick={() => deleteTask(index)}>Delete</button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default Todo;
