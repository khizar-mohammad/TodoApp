import React, { useState } from 'react';

function TodoForm({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task:
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;
