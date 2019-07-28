import { useState } from 'react';
import validate from 'utils/validation';

const useValidation = () => {

  const [valid, setValid] = useState(null);
  const [delay, setDelay] = useState(null);
  const [msg, setMsg] = useState(null);

  const checkValidation = (id, val) => {
    if(id in validate) {
      clearTimeout(delay);
      setDelay(setTimeout(() => {
        const { isValid, msg } = validate[id](val);
        setValid(isValid);
        setMsg(msg);
      }, 700))
    } else {
      setValid(true);
    }    
  };

  return {
    valid,
    msg,
    checkValidation,
    'data-valid': valid,
  };
};

export default useValidation;