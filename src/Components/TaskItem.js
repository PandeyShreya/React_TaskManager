import React from 'react';
import '../CSS/TaskItem.css'

const TaskItem = ({ task, onTaskChange }) => {
  const handleCheckboxChange = () => {
    onTaskChange(prevTasks => prevTasks.map(t =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    ));
  };

  const handleDelete = () => {
    onTaskChange(prevTasks => prevTasks.filter(t => t.id !== task.id));
  };

  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckboxChange}
      />
      <p>{task.text}</p>
      
      
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
