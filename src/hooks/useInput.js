/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import validate from 'utils/inputValidation';

const useInput = (label, type, id) => {
  
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(null);

  // effect react on input value changes
  useEffect(() => {
    const isValid = validate[id](value);

    if (isValid && value) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [value]);

  const onChange = e => {
    e.preventDefault();
    setValue(e.target.value);
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