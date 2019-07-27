import React from 'react';

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