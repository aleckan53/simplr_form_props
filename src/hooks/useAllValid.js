import { useState, useEffect } from 'react';

const useAllValid = () => {

  const [allValid, setAllValid] = useState(false);
  const [fields, setFields] = useState({
    email: false,
    password: false,
    username: false,
    terms: false,
    policy: false,
  });

  useEffect(() => {
    if (!(Object.values(fields).includes(false))) {
      setAllValid(true);
    }
  }, [fields]);

  const addValidField = (id, field) => {
    setFields({ ...fields, [id]: field });
  };

  return {
    addValidField, allValid
  };
};

export default useAllValid;