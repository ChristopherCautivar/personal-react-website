import React from 'react';

export default function Todo({ todo, toggleTodo }) {
  // create a wrapper function so that the reference can be passed to onChange, and the function
  // with the parameter, toggleTodo, can be called with the corresponding parameter
  function handleTodoClick() {
    toggleTodo(todo.id)
  }
  return (
    <div>
      <label>
        {todo.name}
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
      </label>
    </div>
  );
}
