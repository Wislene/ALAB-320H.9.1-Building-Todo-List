import React from "react";
import TodoList from "./components/TodoList";
// import './styles.css';
// import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>To Do List</h1>
      <h2> My Tasks of Things to Complete:</h2>
      <TodoList />
    </div>
  );
}

export default App;
