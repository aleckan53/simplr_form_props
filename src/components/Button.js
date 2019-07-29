import React from 'react';

const Button = ({ name, disabled, ...props }) => (
  <button 
    {...props}
    className='btn'
    disabled={disabled}>
    {name}
  </button>
);

export default Button;