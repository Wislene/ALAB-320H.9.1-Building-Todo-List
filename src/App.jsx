import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddButton from './components/AddButton';  

function App() {
  const [todos, setTodos] = useState([]);  // Initialize the todos state
  const [newTodo, setNewTodo] = useState('');  // State to hold the new todo input

  // Function to add a new todo
  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;  // Prevent adding empty todos
    const newTodoItem = {
      id: todos.length + 1,  //  ID assignment
      name: newTodo,
      completed: false
    };
    setTodos([...todos, newTodoItem]);  // Add the new todo to the todos array
    setNewTodo('');  // Clear the input field
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));  // Remove the todo by id
  };

  // Function to edit a todo
  const editTodo = (id, newName) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? {...todo, name: newName} : todo
    );
    setTodos(updatedTodos);  // Update the todos array
  };

  return (
    <div className="app-container">
      <h1>To Do List</h1>
      <h2>My Tasks of Things to Complete:</h2>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
        />
        <AddButton onAdd={handleAddTodo} />
      </div>
      <TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
    </div>
  );
}

export default App;
