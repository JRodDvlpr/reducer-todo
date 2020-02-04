import React from 'react';
import Todo from './Todo';

const Todos = ({todos, toggleTodo, clearCompleted}) => {
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
      <button onClick={clearCompleted}>Clear</button>
    </div>
  );
};

export default Todos;