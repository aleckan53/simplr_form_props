import { useState } from 'react';

const useFormState = () => {
  const [values, setValues] = useState({
    businessName: '',
    email: '',
    username: '',
    password: '',
    website: '',
    businessType: '',
    terms: false,
    policy: false,
  });

  const [valid, setValid] = useState({
    email: false,
    password: false,
    username: false,
    terms: false,
    policy: false,
  });

  const updateValue = (id, val) => {
    if(val) {
      setValues({...values, [id]: val});
    } else {
      setValues({...values, [id]: !values[id]})
    }
  };

  const updateValid = (field, isValid) => {
    setValid({ ...valid, [field]: isValid });
  };

  return {
    values, valid, updateValue, updateValid,
  };
};

export default useFormState;