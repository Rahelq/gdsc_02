import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTask={addTask} />
      <ul>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            removeTask={removeTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;