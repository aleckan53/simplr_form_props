import { useState } from 'react';

const useSelect = (options) => {
  const [value, setValue] = useState(null);

  const onChange = e => {
    const choise = e.target.value;
    setValue(choise);
  }

  return {
    value, onChange, options
  };
};

export default useSelect;