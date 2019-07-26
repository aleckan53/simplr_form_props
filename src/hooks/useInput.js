import { useState, useEffect } from 'react';
import validate from 'utils/inputValidation';

const useInput = (label, type, id) => {
  
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (validate[id](value)) {
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