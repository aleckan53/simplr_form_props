import React from 'react';
import useInput from 'hooks/useInput';

const Input = ({ checkValid, type = 'text', name, children }) => {
  const { value, valid, onChange, invalidMsg } = useInput(type, checkValid)

  return <>
    {name && <label htmlFor={name}>{name}</label>}
    <input className='input' type={type} onChange={onChange} data-valid={valid}/>
    {/* Displays validation msg only with text inputs */}
    {!valid && type !== 'checkbox' ? <div className='invalidMsg'><p>{invalidMsg}</p></div> : ''}
    {children}
  </>
}

export default Input;