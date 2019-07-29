/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useValidation } from 'hooks';

const Input = ({ label, id, toggleValue, updateValue, type='text', hint, updateValid = () => {}, children }) => {
  const { valid, msg, checkValidation } = useValidation(type);

  useEffect(() => {
    updateValid(id, valid);   // updates valid in form's state
  }, [valid]);

  const handleChange = e => {
    const val = e.target.value;
    checkValidation(id, val); // runs validation

    if(type === 'checkbox') {
      toggleValue(id);        // toggles value in form's state if checkbox
    } else {
      updateValue(id, val);   // updates value in form's state
    }    
  };

  return <>
    <label htmlFor={id} data-for={type}>{label} {hint && <span>{hint}</span>}</label> 
    <input id={id} className={`input ${type}`} type={type} onChange={handleChange} data-valid={valid}/>
    {(!valid && type !=='checkbox') && <div className='invalidMsg'><p>{msg}</p></div>}
    {children}
  </>
};

export default Input;