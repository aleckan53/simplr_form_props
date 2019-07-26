import { useState, useEffect } from 'react';

const useValidAll = (...args) => {
  const [allValid, setAllValid] = useState(false);

  useEffect(() => {
    if(args) {
      setAllValid(!args.includes(false))
    }
  }, [args])

  return {
    allValid,
  };
};

export default useValidAll;