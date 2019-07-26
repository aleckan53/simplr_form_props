import React from 'react';

const Input = ({ label, type, onChange, id, valid }) => {

  return <>
    {label && <label htmlFor={id}>{label}</label>}
    <input type={type} onChange={onChange} id={id} data-valid={valid}/>
  </>
}

export default Input;