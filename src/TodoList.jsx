import React from 'react';

function TodoList({ tasks, deleteTask, editTask, toggleTaskCompleted }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompleted(index)}
          />
          {task.text}
          <button onClick={() => deleteTask(index)}>Delete</button>
          <button onClick={() => editTask(index, prompt('Enter new task:'))}>Edit</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
