import React from 'react';

const SubmitButton = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="submit-button">
      {children}
    </button>
  );
};

export default SubmitButton;
