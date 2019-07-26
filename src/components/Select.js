import React from 'react';

const Select = ({ onChange, options=[] }) => {

  return (
    <select onChange={onChange}>
      {options.map((opt, i) => <option key={i}>{opt}</option>)}
    </select>
  );
};

export default Select;