import React from 'react';

const Input = ({label}) => {

  return <>
    {label && <label></label>}
    <input/>
  </>
}

export default Input;