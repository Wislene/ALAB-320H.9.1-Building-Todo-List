import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddButton from "./AddButton";
import { v4 as uuidv4 } from 'uuid';

// List of todo items to complete

const TodoList = () => {
  // Initialized the todos arrary with useSate predefined todo list

  const [todos, setTodos] = useState([
    { name: "1. Change car tires", completed: false },
    { name: "2. Clean kitchen", completed: false },
    { name: "3. Exercise: go for a run", completed: true },
    { name: "4. Work on Capstone Project", completed: false },
    { name: "5. Go to the beach", completed: false },
    { name: "6. Order groceries", completed: true },
  ]);

  const addTodo = (todoText) => {
    const newTodo = {
      id: uuidv4(),  // Generates a unique ID // 
      name: todoText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id, newName) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, name: newName } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoCompletion = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={() => deleteTodo(todo.id)}
            onEdit={(newName) => updateTodo(todo.id, newName)}
            onToggle={() => toggleTodoCompletion(todo.id)}
          />
        ))}
      </ul>
      <AddButton onAdd={() => addTodo("New Todo")} />
    </>
  );
};

export default TodoList;

//     const [todos, setTodos] = useState(initialTodos);

//     const addTodo = (name) => {
//       const newTodo = {
//         id: todos.length + 1,
//         name,
//         completed: false };
//       };
//       setTodos([...todos, newTodo]);
//     };

//     const updateTodo = (oldTodo, newName) => {
//       const updatedTodos = todos.map(todo => todo === oldTodo ? {...todo, name: newName} : todo);
//       setTodos(updatedTodos);
//     };

//     const deleteTodo = (todoToDelete) => {
//       setTodos(todos.filter(todo => todo !== todoToDelete));
//     };

//     return (
//       <>
//         {todos.map((todo, index) => (
//           <TodoItem key={index} todo={todo} onUpdate={updateTodo} onDelete={deleteTodo} />
//         ))}
//         <AddButton onClick={() => addTodo("New Todo")}>Add Todo</AddButton>
//       </>
//     );
//   };

//   return (
//     <ul>
//       {todos.map((todo, index) => (
//         <li key={index}>
//           <input type="checkbox" checked={todo.completed} onChange={() => {}} />
//           {todo.name}
//         </li>
//       ))}
//     </ul>
//   );
// };
