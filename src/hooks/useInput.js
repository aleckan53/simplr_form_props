/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import validate from 'utils/inputValidation';

const useInput = (type = 'text', checkValid) => {
  
  const [value, setValue] = useState(null);
  const [valid, setValid] = useState(null);
  const [timer, setTimer] = useState(null);
  const [invalidMsg, setInvalidMsg] = useState(null);

  // effect reacts when input's value changes
  useEffect(() => {
    if(checkValid) {
      const { isValid, msg } = type === 'checkbox' ? {isValid: value, msg: ''} : validate[checkValid](value);

      clearTimeout(timer);

      if(value) {
        setTimer(setTimeout(() => {
          setValid(isValid);
          setInvalidMsg(msg);
        }, 700));
      } else {
        setValid(null);
        setInvalidMsg(null);
      }
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
    value,
    valid,
    onChange,
    invalidMsg,
  }
}

export default useInput;