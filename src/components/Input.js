import React from 'react';
import useInput from 'hooks/useInput';

const Input = ({ label, id, type = 'text', children }) => {
  const { valid, onChange, invalidMsg } = useInput(id, type);

  // conditionally renders invalid msg
  const showMsg = !valid && type !== 'checkbox';

  return <>
    <label htmlFor={id}>{label}</label>
    <input id={id} className={`input ${type}`} type={type} onChange={onChange} data-valid={valid}/>
    {showMsg && <div className='invalidMsg'><p>{invalidMsg}</p></div>}
    {children}
  </>
};

export default Input;