
export const initialState = {
  todos: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 1,
    },
  ],
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
          return {
              ...state,
              todos: [
                  ...state.todos,
                  {
                      item: action.payload,
                      id: Date.now(),
                      completed: false,
                  },
              ],
          };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (action.payload === todo.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed),
      };
    default:
      return state;
  }
};