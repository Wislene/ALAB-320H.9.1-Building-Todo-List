import React, { useState } from 'react';
import DeleteButton from '../components/Buttons/DeleteButton';
import UpdateButton from './Buttons/UpdateButton';

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  // if (!todo) {
  //   console.error("TodoItem is missing the 'todo' prop.");
  //   return null; 

  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);

  // Handle submitting edited to do item

  const handleSubmitEdit = () => {
    onEdit(todo.number, editValue);
    setIsEditing(false);
};

// Handle switching/toggling edit item
const toggleEdit = () => {
  setIsEditing(!isEditing);
  setEditValue(todo.name); // Reset edit value on cancel
};


// Handle changes to the todo input field
const handleChange = (e) => {
  setEditValue(e.target.value);
};

 // Handle saving the todo item

  const handleSave = () => {
    onUpdate(todo, editValue);
    setIsEditing(false);
  };

   // Handle cancelling to do item

  const handleCancel = () => {
    setEditValue(todo.name);
    setIsEditing(false);
  };

  return (
    <div>
        {isEditing ? (
            <>
                <input type="text" value={editValue} onChange={handleChange} />
                <button onClick={handleSubmitEdit}>Submit</button>
                <button onClick={toggleEdit}>Cancel</button>
            </>
        ) : (
            <>
                <span>{todo.name}</span>
                <UpdateButton onClick={toggleEdit} />
                <DeleteButton onClick={() => onDelete(todo.number)} />
            </>
        )}
    </div>
);
};

export default TodoItem;

//   return (
//     <li>
//       <input
//         type="checkbox"
//         checked={todo.completed}
//         onChange={() => onUpdate({...todo, completed: !todo.completed})}
//       />
//       {isEditing ? (
//         <>
//           <input type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} />
//           <button onClick={handleSave}>Save</button>
//           <button onClick={handleCancel}>Cancel</button>
//         </>
//       ) : (
//         <>
//           {todo.name}
//           <button onClick={handleEdit}>Edit</button>
//           <button onClick={() => onDelete(todo)}>Delete</button>
//         </>
//       )}
//     </li>
//   );
// };

// export default TodoItem;
