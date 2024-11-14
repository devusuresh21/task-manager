// src/TaskItem.jsx
import React from 'react';

function TaskItem({ task, onDelete, onEdit, onToggleComplete }) {
  return (
    <div className={`task-item-container ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="button-group">
        <button onClick={() => onEdit(task.id)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
        <button
          onClick={() => onToggleComplete(task.id)}
          className={`complete ${task.completed ? 'completed' : 'pending'}`}
        >
          {task.completed ? 'Completed' : 'Mark Complete'}
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
