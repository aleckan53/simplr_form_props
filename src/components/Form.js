import React, { useContext } from 'react';
import FormContext from 'context/FormContext';

import Input from './Input';
import Button from './Button';
import Select from './Select';

const Form = () => {

  const { values, allValid } = useContext(FormContext);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  }
  
  return (
    <form className='form' onSubmit={onSubmit}>
      <fieldset>
      <legend>LET'S GET STARTED</legend>
        <Input label='Business name'/>
        <Input label='Business email' id='email' type='email'/>
        <Input label='Create a username' id='username'/>
        <Input label='Password' id='password' type='password'/>
        <Input label='Website' id='website'/>
        <Input label='Terms of service' id='terms' type='checkbox'>
          <p className='checkBoxDescription'>I have read and I do accept <a href='www.google.com'>terms of services</a></p>
        </Input>
        <Input label='Privacy policy' id='policy' type='checkbox'>
          <p className='checkBoxDescription'>I have read and I do accept <a href='www.google.com'>privacy policy</a></p>
        </Input>
        <Button name='Register' type='submit' disabled={allValid}/>
      </fieldset>
    </form>
  )
}

export default Form;