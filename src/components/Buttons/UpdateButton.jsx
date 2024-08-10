import React from 'react';

const UpdateButton = ({ onClick, className, children }) => {
  return (
    <button className={className} onClick={onClick}>
        {children}
    </button>
  );
};

export default UpdateButton;
