import React from 'react';
import TaskItem from './TaskItem';
import '../CSS/TaskList.css'

const TaskList = ({ tasks, setTasks }) => {
  const handleTaskChange = (updatedTasks) => {
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        <ul>
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onTaskChange={handleTaskChange}
            />
          ))}
        </ul>
      ) : (
        <p className="no-tasks-message">No tasks available</p>

      )}
    </div>
  );
};

export default TaskList;
