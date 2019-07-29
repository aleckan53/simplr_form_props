import { useState, useEffect } from 'react';

const useAllValid = (allFields) => {

  const [allValid, setAllValid] = useState(false);

  useEffect(() => {
    console.log(allFields)
    setAllValid(!Object.values(allFields).includes(false))
  }, [allFields]);

  return {
    allValid
  };
};

export default useAllValid;