/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from 'react';
import validate from 'utils/inputValidation';
import FormContext from 'context/FormContext';

const useInput = (id, type = 'text') => {
  const { addValue, addValid } = useContext(FormContext);
  
  const [value, setValue] = useState(null);
  const [valid, setValid] = useState(null);
  const [delay, setDelay] = useState(null);
  const [invalidMsg, setInvalidMsg] = useState(null);

  // effect reacts when input's value changes
  useEffect(() => {
    // handles validation
    if(id in validate) {
      const { isValid, msg } = validate[id](value || '');

      clearTimeout(delay);
      // if validation passed, setValid with no delay
      if(isValid && value) {
        setValid(isValid);
      }
      // if validation is failed, delay msg while user typing
      else if (!isValid && value) {
        setDelay(setTimeout(() => {
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

    addValue({ [id]: value });
    addValid({ [id]: valid });

  }, [value, valid]);

  const onChange = e => {
    // handle checkbox and text inputs differently
    if(type === 'checkbox') {
      setValue(!value);
      setValid(!valid);
    } else {
      setValue(e.target.value);
    }
  };

  return {
    value,
    valid,
    onChange,
    invalidMsg,
  };
};

export default useInput;