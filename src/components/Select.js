import React from 'react';

const Select = ({ label, id, updateState }) => {
  // hardcoded options
  const options = ['Logistics', 'E-Commerce', 'Tech', 'Retail', 'Other'];
  
  const handleChange = e => {
    const val = e.target.value;
    updateState(id, val);
  };

  return <>
    <label htmlFor={id}>{label}</label>
    <select className='select' id={id} onChange={handleChange} defaultValue=''>
      <option id='disabled' value='' disabled>Select your business</option>
      {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
    </select>
  </>
};

export default Select;