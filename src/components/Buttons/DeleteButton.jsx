import React from 'react';

const DeleteButton = ({ onClick, className, children }) => (
  <button className={className} onClick={onClick}>
      {children}
  </button>
);

export default DeleteButton;
