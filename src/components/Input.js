import React from 'react';

const Input = ({ label, children, id, ...inputProps }) => {

  return <>
    {label && <label htmlFor={id}>{label}</label>}
    <input {...inputProps}/>
    {children}
  </>
}

export default Input;