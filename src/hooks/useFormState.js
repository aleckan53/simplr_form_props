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
    setValues({...values, [id]: val});
  };

  const toggleValue = (id) => {
    setValues({...values, [id]: !values[id]})
  }

  const updateValid = (field, isValid) => {
    setValid({ ...valid, [field]: isValid || false });
  };

  return {
    values, valid, updateValue, updateValid, toggleValue
  };
};

export default useFormState;