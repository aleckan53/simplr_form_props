import React from 'react';
import './css/Select.css';
import useInput from 'hooks/useInput';

const Select = ({ id, label, optional }) => {
  // hardcoded options
  const options = ['Logistics', 'E-Commerce', 'Tech', 'Retail'];

  const { onChange } = useInput(id, optional);

  return <>
    <label htmlFor={id}>{label}</label>
    <select className='select' id={id} onChange={onChange}>
      <option value=''>Select your business</option>
      {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
    </select>
  </>
};

export default Select;