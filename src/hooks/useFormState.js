import { useState, useEffect } from 'react';

const useFormState = () => {
  const [state, setState] = useState({
    businessName: '',
    email: '',
    username: '',
    password: '',
    website: '',
    businessType: '',
    terms: false,
    policy: false,
  });

  useEffect(() => {
    console.log(state);
  }, [state]);

  const updateState = (id, val) => {
    setState({...state, [id]: val});
  };

  return {
    state, updateState,
  };
};

export default useFormState;