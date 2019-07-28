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

  const onChange = val => {
    setState({...state, ...val});
  };

  return {
    state, onChange,
  };
};

export default useFormState;