

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // Add a new todo item
      return [...state, { name: action.payload, completed: false }];

    case 'EDIT_TODO':
      // Go through todo list and update the exact name

      return state.map(todo =>
        todo.name === action.oldName ? { ...todo, name: action.newName } : todo
      );

    case 'TOGGLE_TODO':

      // Switch/Toggle the completion/incomplete status of the todo item
      return state.map(todo =>
        todo.name === action.payload ? { ...todo, completed: !todo.completed } : todo
      );

    case 'DELETE_TODO':
      // Remove the todo item from the list
      return state.filter(todo => todo.name !== action.payload);

    default:
      // Throw an error if the action type is not working properly
      throw new Error(`Action type is invalid: ${action.type}`);
  }
};

export default todoReducer;
