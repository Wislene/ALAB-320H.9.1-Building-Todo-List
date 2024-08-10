import React, { useState } from 'react';

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(todo, editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(todo.name);
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onUpdate({...todo, completed: !todo.completed})}
      />
      {isEditing ? (
        <>
          <input type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          {todo.name}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(todo)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
