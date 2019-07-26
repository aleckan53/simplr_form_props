import React from 'react';

const Input = ({label, type, onChange}) => {

  return <>
    {label && <label>{label}</label>}
    <input type={type} onChange={onChange}/>
  </>
}

export default Input;