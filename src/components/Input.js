import React from 'react';

const Input = ({ label, type, onChange, id, valid, children }) => {

  return <>
    {label && <label htmlFor={id}>{label}</label>}
    <input type={type} onChange={onChange || null} id={id} data-valid={valid}/>
    {children}
  </>
}

export default Input;