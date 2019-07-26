import React, { useState, useEffect } from 'react';

const FormContext = React.createContext({});

export default FormContext;

export const FormProvider = ({ children }) => {
  const [allValid, setAllValid] = useState(false);
  const [fields, setFields] = useState({
    email: null,
    password: null,
    username: null,
    terms: null,
    policy: null,
  })

  useEffect(() => {
    checkAllFields(Object.values(fields));
  }, [fields])

  const checkAllFields = (...args) => {
    if(args) {
      setAllValid(!args.includes(false))
    }
  }

  const setValid = field => {
    setFields({...fields, ...field});
  }


  return (
    <FormContext.Provider value={{
      setValid
    }}>
      {children}
    </FormContext.Provider>
  );
};