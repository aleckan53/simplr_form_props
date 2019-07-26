import { useState, useEffect } from 'react';

const useInput = (name, type) => {
  
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log(value);
  }, [value]);

  const onChange = e => {
    e.preventDefault();

    setValue(e.target.value);
  }

  return {
    id: name,
    label: name,
    type,
    onChange,
    value,
  }
}

export default useInput;