import React from 'react';
import useInput from 'hooks/useInput';

const Input = ({ name, type = 'text', children }) => {
  const { valid, onChange, invalidMsg } = useInput(name, type);

  // conditionally renders invalid msg
  const showMsg = !valid && type !== 'checkbox';

  return <>
    <label htmlFor={name}>{name}</label>
    <input className='input' type={type} onChange={onChange} data-valid={valid}/>
    {showMsg && <div className='invalidMsg'><p>{invalidMsg}</p></div>}
    {children}
  </>
};

export default Input;