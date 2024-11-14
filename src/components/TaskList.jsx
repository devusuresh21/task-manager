// src/TaskList.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList({ tasks, onDelete, onEdit, onToggleComplete }) {
  const navigate = useNavigate();
  const handleAddTask = () => {
    navigate('/add-task'); // Navigates to the add-task route
  };

  const handleEdit = (task) => {
    onEdit(task); // Set the task to edit in the parent
    navigate('/edit'); // Navigate to the edit page
  };

  return (
    <div className="task-list-container">
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onClick={handleAddTask}
            onEdit={() => handleEdit(task)}
            onToggleComplete={onToggleComplete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

