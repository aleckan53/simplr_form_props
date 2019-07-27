import React, { useContext } from 'react';
import FormContext from 'context/FormContext';
import { Input, Select, Button } from 'components';

const Form = () => {

  const { values, allValid } = useContext(FormContext);

  const onSubmit = e => {
    e.preventDefault();
    console.log(`POST data to server: ${values}`);
  };
  
  return (
    <form className='form' onSubmit={onSubmit}>
      <fieldset>
      <legend>LET'S GET STARTED</legend>
        <Input label='Business name' id='businessName' optional/>
        <Input label='Business email' id='email' type='email'/>
        <Input label='Create a Username' id='username'/>
        <Input label='Password' id='password' type='password' hint='6 characters | 1 uppercase | 1 lowercase | 1 digit'/>
        <Input label='Website' id='website' optional hint='(Optional)'/>
        <Select label='Type of Business' id='businessType' optional/>
        <Input label='Terms of Service' id='terms' type='checkbox'>
          <p className='checkBoxDescription'>I have read and I do accept <a href='www.google.com'>terms of services</a></p>
        </Input>
        <Input label='Privacy Policy' id='policy' type='checkbox'>
          <p className='checkBoxDescription'>I have read and I do accept <a href='www.google.com'>privacy policy</a></p>
        </Input>
        <Button name='Register' type='submit' disabled={!allValid}/>
      </fieldset>
    </form>
  );
};

export default Form;