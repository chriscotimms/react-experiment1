import { useState } from 'react';
import tasks from '../data/tasks';

function ToDoList() {
    const [taskList, setTaskList] = useState(tasks);

    return (
        <div>
      <h1>To-Do List</h1>

      <ul>
        {taskList.map(task => (
          <li key={task.id}>
            {task.id}, {task.text}, completed:{task.completed ? "yes" : "no"}
          </li>
        ))}
      </ul>
      
    </div>
    );
}

export default ToDoList;