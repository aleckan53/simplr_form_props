import React, { useEffect } from 'react';
import useValidation from 'hooks/useValidation';

const Input = ({ label, id, updateValue, type='text', hint, updateValid, children }) => {
  const { valid, msg, checkValidation } = useValidation(type);

  const handleChange = e => {
    const val = type === 'checkbox' ? '' : e.target.value;
    checkValidation(id, val); // runs validation
    updateValue(id, val);     // updates form's state
  };

  useEffect(() => {
    updateValid(id, valid);
  }, [valid])

  return <>
    <label htmlFor={id} data-for={type}>{label} {hint && <span>{hint}</span>}</label> 
    <input id={id} className={`input ${type}`} type={type} onChange={handleChange} data-valid={valid}/>
    {(!valid && type !=='checkbox') && <div className='invalidMsg'><p>{msg}</p></div>}
    {children}
  </>
};

export default Input;