import React from 'react';

const DeleteButton = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="delete-button">
      {children}
    </button>
  );
};

export default DeleteButton;
