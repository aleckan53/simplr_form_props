import React from 'react';
import { Input, Select, Button } from 'components';
import { useFormState, useAllValid } from 'hooks';

const Form = () => {
  const { values, valid, ...handlers } = useFormState();
  const { allValid } = useAllValid(valid);

  const onSubmit = e => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form className='form' onSubmit={onSubmit}>
      <fieldset>
      <legend>LET'S GET STARTED</legend>
        <Input {...handlers} label='Business Name' id='businessName'/>
        <Input {...handlers} label='Business Email' id='email'/>
        <Input {...handlers} label='Create a Username' id='username'/>
        <Input {...handlers} label='Password' id='password' type='password' hint='6 characters | 1 uppercase | 1 lowercase | 1 digit'/>
        <Input {...handlers} label='Website' id='website' hint='(Optional)'/>
        <Select {...handlers} label='Type of Business' id='businessType'/>
        <Input {...handlers} label='Terms of Service' id='terms' type='checkbox'>
          <p className='checkBoxDescription'>I have read and I do accept <a href='/'>terms of services</a></p>
        </Input>
        <Input {...handlers} label='Privacy Policy' id='policy' type='checkbox'>
          <p className='checkBoxDescription'>I have read and I do accept <a href='/'>privacy policy</a></p>
        </Input>
        <Button name='Register' type='submit' disabled={!allValid}/>
      </fieldset>
    </form>
  );
};

export default Form;