import React from 'react';
import './css/Button.css';

const Button = ({name, disabled, ...props}) => {

  return (
    <button 
      {...props}
      className='btn'
      disabled={disabled}>
      {name}
    </button>
  );
};

export default Button;