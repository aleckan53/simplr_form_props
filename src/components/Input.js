import React from 'react';
import useValidation from 'hooks/useValidation';

const Input = ({ label, id, updateState, type='text', hint, addValidField }) => {
  // const { valid, onChange, invalidMsg } = useInput(id, optional, type);

  const { valid, msg, checkValidation } = useValidation();

  const handleChange = e => {
    const val = e.target.value;
    // updates form's state
    updateState(id, val);
    // runs validation
    checkValidation(id, val);
    // updates valid in form
    addValidField(id, valid);
  };

  return <>
    <label htmlFor={id} data-for={type}>{label}{hint && <span>{hint}</span>}</label> 
    <input id={id} className={`input ${type}`} type='text' onChange={handleChange}/>
    {!valid && <div className='invalidMsg'><p>{msg}</p></div>}

    {/* <label htmlFor={id} data-for={type}>{label} {hint && <span>{hint}</span>}</label>
    <input id={id} className={`input ${type}`} type={type} onChange={onChange} data-valid={valid}/>
    {showMsg && <div className='invalidMsg'><p>{invalidMsg}</p></div>}
    {children} */}
  </>
};

export default Input;