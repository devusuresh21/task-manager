// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001'
});

export const getTasks = () => api.get('/tasks');
export const createTask = (task) => api.post('/tasks', task);
export const updateTask = (id, task) => api.put(`/tasks/${id}`, task);
export const deleteTask = (id) => api.delete(`/tasks/${id}`);
export const toggleCompleteTask = (id, completed) =>
  api.patch(`/tasks/${id}`, { completed });
