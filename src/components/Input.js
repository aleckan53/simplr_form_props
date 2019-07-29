import React from 'react';
import useValidation from 'hooks/useValidation';

const Input = ({ label, id, updateState, type='text', hint, addValidField, children }) => {
 
  const { valid, msg, checkValidation } = useValidation();

  const handleChange = e => {
    const val = e.target.value;
    updateState(id, val);     // updates form's state
    checkValidation(id, val); // runs validation
    addValidField(id, valid); // updates valid in form
  };

  return <>
    <label htmlFor={id} data-for={type}>{label} {hint && <span>{hint}</span>}</label> 
    <input id={id} className={`input ${type}`} type={type} onChange={handleChange} data-valid={valid}/>
    {(!valid && type !=='checkbox') && <div className='invalidMsg'><p>{msg}</p></div>}
    {children}
  </>
};

export default Input;