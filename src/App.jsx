import React, { useState } from 'react';
import TodoList from "./TodoList.jsx"; 
import TodoForm from "./TodoForm.jsx"; 
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  // handle adding a new task
  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
    console.log([...tasks], { text: task, completed: false });
  }

  // handle deleting a task
  const deleteTask = (index) => {
    // filter tasks list from i=0 till end where i=index, store new list ina tasks list
    setTasks(tasks.filter((task, i) => i !== index));
  }

  // handle editing a task with updated info from prompt
  const editTask = (index, newTask) => {
    // map through tasks list
    setTasks(tasks.map((task, i) => {
      // where i=index overwrite the object, store new list ina tasks list
      if (i === index) {
        return { text: newTask, completed: task.completed };
      }
      // where i not equal index, then leave the object as it is
      return task;
    }));
  }

  // handle marking a task as complete/incomplete
  const toggleTaskCompleted = (index) => {
    // map through tasks list
    setTasks(tasks.map((task, i) => {
      // where i=index toggle key completed, store new list ina tasks list
      if (i === index) {
        return { text: task.text, completed: !task.completed };
      }
      // where i not equal index, then leave key completed as it is
      return task;
    }));
  }

  return (
    <div>
      <h1>Todo App</h1>
      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
        toggleTaskCompleted={toggleTaskCompleted}
      />
      <TodoForm addTask={addTask} />
    </div>
  );
}

export default App;
