import React from 'react';
import Todo from './Todo';

const Todos = ({todos, toggleCompleted, clearCompleted}) => {
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleCompleted={toggleCompleted} />
      ))}
      <button onClick={clearCompleted}>Clear</button>
    </div>
  );
};

export default Todos;