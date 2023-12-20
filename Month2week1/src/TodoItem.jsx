import React from 'react';

const TodoItem = ({ task, removeTask, toggleTaskCompletion }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => removeTask(task.id)}>Remove</button>
    </li>
  );
};

export default TodoItem;