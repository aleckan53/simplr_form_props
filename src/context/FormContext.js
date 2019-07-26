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
    termsAccepted: false,
    policyAccepted: false,
  });

  useEffect(() => {
    const allValid = Object.values(valid).includes(false);
    setAllValid(!allValid);
  }, [valid]);

  const addValue = val => {
    setValues({ ...values, ...val });
  };

  const addValid = val => {
    setValid({...valid, ...val});
  };

  return (
    <FormContext.Provider value={{
      addValue, values,
      addValid, valid,
      allValid,
    }}>
      {children}
    </FormContext.Provider>
  );
};