// src/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Task Manager</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/add-task">Add Task</Link>
        </li>
        <li>
          <Link to="/task-list">Task List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
