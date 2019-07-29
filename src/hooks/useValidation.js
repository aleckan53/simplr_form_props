import { useState } from 'react';
import validate from 'utils/validation';

const useValidation = (inputType) => {

  const [valid, setValid] = useState(null);
  const [delay, setDelay] = useState(null);
  const [msg, setMsg] = useState(null);

  const checkValidation = (id, val) => {
    if(inputType === 'checkbox') { // toggles valid for checkboxes
      setValid(!valid);
      return;
    } 

    if(!val) {  // resets state if no value
      setValid(null);
      setMsg(null);
      return;
    }
    
    if(id in validate) {  // runs validation with delay, if validation fn exists
      const { isValid, msg } = validate[id](val);
      clearTimeout(delay);

      if(isValid) { // if valid updates state with no delay
        setValid(isValid);
        setMsg(msg);
      } else { // delays check when user typing
        setDelay(setTimeout(() => {
          setValid(isValid);
          setMsg(msg);
        }, 700));  
      }
    } else { // sets valid = true for optional inputs
      setValid(true);
    }
  };

  return {
    valid,
    msg,
    checkValidation,
  };
};

export default useValidation;