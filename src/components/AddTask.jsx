// AddTask.js
import React, { useState } from 'react';

function AddTask({ onAddTask }) {
  const [newTaskText, setNewTaskText] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTaskText.trim() !== '') {
      onAddTask(newTaskText.trim());
      setNewTaskText('');
    }
  };

  return (
    <form onSubmit={handleAddTask}>
      <input 
        type="text" 
        value={newTaskText} 
        onChange={(e) => setNewTaskText(e.target.value)} 
        placeholder="Add new task" 
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;
