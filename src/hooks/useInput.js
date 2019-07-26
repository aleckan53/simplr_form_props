/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import validate from 'utils/inputValidation';

const useInput = (name, type = 'text') => {
  
  const [value, setValue] = useState(null);
  const [valid, setValid] = useState(null);
  const [timer, setTimer] = useState(null);
  const [invalidMsg, setInvalidMsg] = useState(null);

  // effect reacts when input's value changes
  useEffect(() => {
    if(name in validate) {
      const { isValid, msg } = validate[name](value);

      clearTimeout(timer);
      // if validation passed, setValid with no delay
      if(isValid && value) {
        setValid(isValid);
      }
      // if validation is failed, delay setValid while user typing
      else if (!isValid && value) {
        setTimer(setTimeout(() => {
          setValid(isValid);
          setInvalidMsg(msg);
        }, 700));
      }
      // if value is empty, reset to null 
      else {
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