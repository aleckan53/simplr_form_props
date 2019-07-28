import React from 'react';
import useInput from 'hooks/useInput';

const Input = ({ label, id, onChange, type='text', hint }) => {
  // const { valid, onChange, invalidMsg } = useInput(id, optional, type);

  // // conditionally renders invalid msg
  // const showMsg = !valid && type !== 'checkbox';

  

  return <>
    <label htmlFor={id} data-for={type}>{label}{hint && <span>{hint}</span>}</label> 
    <input id={id} className={`input ${type}`} type='text' onChange={e => onChange({[id]: e.target.value})}/>
    
    {/* <label htmlFor={id} data-for={type}>{label} {hint && <span>{hint}</span>}</label>
    <input id={id} className={`input ${type}`} type={type} onChange={onChange} data-valid={valid}/>
    {showMsg && <div className='invalidMsg'><p>{invalidMsg}</p></div>}
    {children} */}
  </>
};

export default Input;