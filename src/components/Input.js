import React from 'react';

const Input = ({label, type}) => {

  return <>
    {label && <label>{label}</label>}
    <input type={type}/>
  </>
}

export default Input;