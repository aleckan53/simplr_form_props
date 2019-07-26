import React from 'react';

const Button = ({name, onClick, type}) => {

  return (
    <button onClick={onClick} type={type} disabled>{name}</button>
  );
};

export default Button;