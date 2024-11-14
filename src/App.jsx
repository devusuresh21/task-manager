// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Navbar from './components/Navbar';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), ...task }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const startEditTask = (task) => {
    setEditingTask(task);
  };

  return (
    <Router>
       <Navbar />
      <Routes>
        <Route
          path="/"
          element={<TaskList tasks={tasks} onDelete={deleteTask} onEdit={startEditTask} onToggleComplete={toggleComplete} />}
        />
        <Route
          path="/edit"
          element={<TaskForm tasks={tasks} taskToEdit={editingTask} onAdd={addTask} onUpdate={updateTask} />}
        />
        <Route
          path="/add-task"
          element={<TaskForm onAdd={addTask} />}
        />
      </Routes>
    </Router>
  );
}

export default App;