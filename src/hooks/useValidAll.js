import { useState, useEffect } from 'react';

const useValidAll = (...args) => {
  const [allValid, setAllValid] = useState(false);

  return {
    allValid,
  };
};

export default useValidAll;