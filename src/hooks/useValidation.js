import { useState, useEffect } from 'react';
import validate from 'utils/validation';

const useValidation = (id, value) => {

  const [valid, setValid] = useState(null);
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    if(id in validate) {
      const { isValid, msg } = validate[id](value);
      setValid(isValid);
      setMsg(msg);
    } else {
      setValid(true);
    }    
  }, [value]);

  return {
    valid,
    msg,
    'data-valid': valid,
  };
};

export default useValidation;