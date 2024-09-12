import { useEffect, useState } from 'react';
import TaskList from './TaskList';
import '../CSS/TaskForm.css'

const TaskForm = () => {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);
  const [id, setId] = useState(parseInt(localStorage.getItem('nextId') || '0', 10));

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('nextId', id);
  }, [tasks, id]); 

  const handle = (e) => {
    e.preventDefault(); 

    if (text.trim()) {
      const newTask = { id: id, text: text, completed: false };
      setTasks(prevTasks => [...prevTasks, newTask]); 
      setId(prevId => prevId + 1); 
      setText('');
    } else {
      alert('Please enter a task'); 
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <form onSubmit={handle} className="task-form">
        <input
          placeholder="Enter new Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <TaskList tasks={tasks} setTasks={setTasks} /> {/* Pass setTasks to TaskList */}
    </div>
  );
};

export default TaskForm;
