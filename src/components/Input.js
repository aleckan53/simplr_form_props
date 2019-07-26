import React from 'react';

const Input = ({ label, children, id, invalidMsg, ...inputProps }) => {

  return <>
    {label && <label htmlFor={id}>{label}</label>}
    <input {...inputProps}/>
    {/* Displays validation msg only with text inputs */}
    {!inputProps['data-valid'] && inputProps.type !== 'checkbox' ? <div className='invalidMsg'><p>{invalidMsg}</p></div> : ''}
    {children}
  </>
}

export default Input;