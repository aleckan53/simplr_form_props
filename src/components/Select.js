import React from 'react';

const Select = ({ onChange, options=[] }) => {

  return <>
  <label>Type of Business</label>
    <select className='select' onChange={onChange}>
      {options.map((opt, i) => <option key={i}>{opt}</option>)}
    </select>
  </>
};

export default Select;