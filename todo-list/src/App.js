import React, { useReducer } from 'react';

// Import Reducer 
import { reducer, initialState } from './reducer/reducer';

import './components/App.css';

// Components
import TodoList from './components/TodoList';
import InputForm from './components/InputForm';


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (e, item) => {
    dispatch({ type: 'ADD_TODO', payload: item });
  };

  const toggleTodo = itemid => {
    dispatch({ type: 'TOGGLE_TODO', payload: itemid });
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  return (
    <div className='App'>
      <div className='header'>
        <h1>Todo List</h1>
        <InputForm addItem={addItem} />
      </div>
      <TodoList
        todos={state.todos}
        toggleTodo={toggleTodo}
        clearCompleted={clearCompleted}
      />
    </div>
  );
};
export default App;