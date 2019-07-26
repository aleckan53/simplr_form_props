import React, { useState } from 'react';

const FormContext = React.createContext({
  fields: {},
  allValid: false,
  updateFields: () => {},
});

export default FormContext;

export const FormProvider = ({ children }) => {

  const [fields, setFields] = useState({});
  const [allValid, setAllValid] = useState(false);


  return (
    <FormContext.Provider value={{
      fields,
      allValid,
    }}>
      {children}
    </FormContext.Provider>
  );
};