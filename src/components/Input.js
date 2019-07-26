import React from 'react';

const Input = ({ name, type, onChange }) => {

  return <>
    {name && <label htmlFor={name}>{name}</label>}
    <input type={type} onChange={onChange} id={name}/>
  </>
}

export default Input;