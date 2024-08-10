import React from 'react';

const AddButton = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="add-button">
      {children}
    </button>
  );
};

export default AddButton;
