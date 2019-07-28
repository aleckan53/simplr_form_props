import React from 'react';
import useInput from 'hooks/useInput';
import useValidation from 'hooks/useValidation';

const Input = ({ label, id, onChange, type='text', hint, addValidField }) => {
  // const { valid, onChange, invalidMsg } = useInput(id, optional, type);

  // // conditionally renders invalid msg

  const { valid, msg, ...dataValid } = useValidation(id, 'text');

  const handleChange = e => {
    const val = e.target.value;
    // updates form's state
    onChange(val);
    // updates valid in form
    console.log(valid, msg)
    // addValidField(id, valid);
  }

  const showMsg = !valid && type !== 'checkbox';


  return <>
    <label htmlFor={id} data-for={type}>{label}{hint && <span>{hint}</span>}</label> 
    <input id={id} className={`input ${type}`} type='text' onChange={handleChange}/>
    {showMsg && <div className='invalidMsg'><p>{msg}</p></div>}

    {/* <label htmlFor={id} data-for={type}>{label} {hint && <span>{hint}</span>}</label>
    <input id={id} className={`input ${type}`} type={type} onChange={onChange} data-valid={valid}/>
    {showMsg && <div className='invalidMsg'><p>{invalidMsg}</p></div>}
    {children} */}
  </>
};

export default Input;