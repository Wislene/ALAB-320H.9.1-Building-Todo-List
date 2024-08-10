import React from 'react';

const EditButton = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="edit-button">
      {children}
    </button>
  );
};

export default EditButton;
