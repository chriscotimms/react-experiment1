// TodoList.js
import { useState } from 'react';
import tasks from '../data/tasks';
import AddTask from './AddTask'; // Import AddTask component

function TodoList() {
  const [taskList, setTaskList] = useState(tasks);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTaskList([...taskList, newTask]);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {taskList.map(task => (
          <li key={task.id}>
            {task.text}
          </li>
        ))}
      </ul>
      {/* Render AddTask component and pass addTask function as prop */}
      <AddTask onAddTask={addTask} />
    </div>
  );
}

export default TodoList;
