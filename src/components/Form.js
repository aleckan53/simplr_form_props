import React, { useState } from 'react';
import Input from './Input';

const Form = () => {

  const [state, setState] = useState({});

  return (
    <form>
      <Input
        type='text'
        label='Business Name'/>
      <Input
        type='submit'/>
    </form>
  )
}

export default Form;