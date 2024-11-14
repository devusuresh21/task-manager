// src/TaskForm.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TaskForm.css';

function TaskForm({ tasks, taskToEdit, onAdd, onUpdate }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [taskToEdit]);

  const handleAdd = () => {
    onAdd({ title, description, completed: false });
    setTitle('');
    setDescription('');
    navigate('/'); // Navigate back to task list
  };

  const handleUpdate = () => {
    onUpdate({ id: taskToEdit.id, title, description });
    setTitle('');
    setDescription('');
    navigate('/'); // Navigate back to task list
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="button-group">
          {taskToEdit ? (
            <button onClick={handleUpdate}>Update Task</button>
          ) : (
            <button onClick={handleAdd}>Add Task</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
