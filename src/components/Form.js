import React, { useState } from 'react';
import Input from './Input';
import useInput from 'hooks/useInput';

const Form = () => {

  const [state, setState] = useState({});

  const { value: businessName, ...nameHandler } = useInput('Business Name', 'text');

  return (
    <form>
      <Input {...nameHandler}/>
      <Input
        type='submit'/>
    </form>
  )
}

export default Form;