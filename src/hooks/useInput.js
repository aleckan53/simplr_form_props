/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import validate from 'utils/inputValidation';

const useInput = (label, type, id) => {
  
  const [value, setValue] = useState(null);
  const [valid, setValid] = useState(null);

  // effect reacts when input's value changes
  useEffect(() => {
    const isValid = type === 'checkbox' ? value : validate[id](value);

    if (isValid && value) {
      setValid(true);
    } else {
      setValid(false);
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
  }
}

export default useInput;