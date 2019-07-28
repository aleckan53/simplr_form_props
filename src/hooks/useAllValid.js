import { useState, useEffect } from 'react';

const useAllValid = () => {

  const [allValid, setAllValid] = useState(false);
  const [fields, setFields] = useState({
    email: null,
    password: null,
    username: null,
    terms: null,
    policy: null,
  });

  useEffect(() => {
    if (!(false in Object.keys(fields))) {
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