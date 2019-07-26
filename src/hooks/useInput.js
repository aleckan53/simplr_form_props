/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import validate from 'utils/inputValidation';

const useInput = (label, id, type = 'text') => {
  
  const [value, setValue] = useState(null);
  const [valid, setValid] = useState(null);
  const [invalidMsg, setInvalidMsg] = useState(null);

  // effect reacts when input's value changes
  useEffect(() => {
    const { isValid, msg } = type === 'checkbox' ? {isValid: value, msg: ''} : validate[id](value);

    if (isValid && value) {
      setValid(true);
    } else {
      setValid(false);
      setInvalidMsg(msg);
    }
  }, [value]);

  const onChange = e => {
    // handle checkbox and text inputs differently
    if(type === 'checkbox') {
      setValue(!value)
    } else {
      setValue(e.target.value);
    }
  }

  return {
    label,
    type,
    onChange,
    value,
    valid,
    id,
    'data-valid': valid,
    className: `input ${type} ${id}`,
    invalidMsg,
  }
}

export default useInput;