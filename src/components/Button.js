import React from 'react';

const Button = ({name, onClick, type, disabled}) => {

  return (
    <button onClick={onClick} type={type} disabled={!disabled}>{name}</button>
  );
};

export default Button;