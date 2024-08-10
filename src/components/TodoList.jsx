import React from 'react';
import TodoItem from './TodoItem';

  // List of todo items to complete

const TodoList = () => {

  const todos = [
    { name: "1. Change car tires", completed: false },
    { name: "2. Clean kitchen", completed: false },
    { name: "3. Exercise: go for a run", completed: true },
    { name: "4. Work on Capstone Project", completed: false },
    { name: "5. Go to the beach", completed: false },
    { name: "6. Order groceries", completed: true }
  ];


  const TodoList = ({ initialTodos }) => {
    const [todos, setTodos] = useState(initialTodos);
  
    const addTodo = (name) => {
      const newTodo = { name, completed: false };
      setTodos([...todos, newTodo]);
    };
  
    const updateTodo = (oldTodo, newName) => {
      const updatedTodos = todos.map(todo => todo === oldTodo ? {...todo, name: newName} : todo);
      setTodos(updatedTodos);
    };
  
    const deleteTodo = (todoToDelete) => {
      setTodos(todos.filter(todo => todo !== todoToDelete));
    };
  
    return (
      <>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} onUpdate={updateTodo} onDelete={deleteTodo} />
        ))}
        <AddButton onClick={() => addTodo("New Todo")}>Add Todo</AddButton>
      </>
    );
  };
  

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <input type="checkbox" checked={todo.completed} onChange={() => {}} />
          {todo.name}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
