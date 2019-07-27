import React, { useState, useEffect } from 'react';

const FormContext = React.createContext({
  addValue: () => {},
  addValid: () => {},
  allValid: false,
  values: {},
});

export default FormContext;

export const FormProvider = ({ children }) => {
  const [allValid, setAllValid] = useState(false);
  const [valid, setValid] = useState({
    email: null,
    password: null,
    username: null,
    terms: null,
    policy: null,
  });

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

  // checks if all fields are valid
  useEffect(() => {
    const allValid = Object.values(valid).every(val => val === true);
    setAllValid(allValid);
  }, [valid, values]);

  const addValue = val => {
    setValues({ ...values, ...val });
  };

  const addValid = val => {
    setValid({...valid, ...val});
  };

  return (
    <FormContext.Provider value={{
      addValue,
      values,
      addValid,
      allValid,
    }}>
      {children}
    </FormContext.Provider>
  );
};