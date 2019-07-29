import React from 'react';
import { Input, Select, Button } from 'components';
import useFormState from 'hooks/useFormState';
import useAllValid from 'hooks/useAllValid';

const Form = () => {

  const { state, updateState } = useFormState();
  const { allValid, addValidField } = useAllValid();

  const onSubmit = e => {
    e.preventDefault();
    // if(!allValid) {
    //   return;
    // }

    console.log(state);
  };

  const handlers = { updateState, addValidField };

  return (
    <form className='form' onSubmit={onSubmit}>
      <fieldset>
      <legend>LET'S GET STARTED</legend>
        <Input {...handlers} label='Business Name' id='businessName'/>
        <Input {...handlers} label='Business Email' id='email'/>
        <Input {...handlers} label='Create a Username' id='username'/>
        <Input {...handlers} label='Password' id='password' type='password' hint='6 characters | 1 uppercase | 1 lowercase | 1 digit'/>
        <Input {...handlers} label='Website' id='website' hint='(Optional)'/>
        <Select {...handlers} label='Type of Business' id='businessType' optional/>
        <Input {...handlers} label='Terms of Service' id='terms' type='checkbox'>
          <p className='checkBoxDescription'>I have read and I do accept <a href='/'>terms of services</a></p>
        </Input>
        <Input {...handlers} label='Privacy Policy' id='policy' type='checkbox'>
          <p className='checkBoxDescription'>I have read and I do accept <a href='/'>privacy policy</a></p>
        </Input>
        <Button name='Register' type='submit'/>
      </fieldset>
    </form>
  );
};

export default Form;