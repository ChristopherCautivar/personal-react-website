import React from 'react';
import Todo from './Todo';

export default function TodoList({ todoProp, toggleTodo }) {
  // return an array of Todo components corresponding to each todo in todoProp
  return (
      todoProp.map(todo => {
        return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
      })
  );
}
