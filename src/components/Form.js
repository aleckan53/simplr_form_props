import React from 'react';
import { Input, Select, Button } from 'components';
import useFormState from 'hooks/useFormState';
import useAllValid from 'hooks/useAllValid';

const Form = () => {

  const { state, updateState } = useFormState();
  const { allValid, addValidField } = useAllValid();

  const onSubmit = e => {
    e.preventDefault();
    if(allValid) {
      console.log(`POST data to server`);
      return;
    }
  };

  return (
    <form className='form' onSubmit={onSubmit}>
      <fieldset>
      <legend>LET'S GET STARTED</legend>
        <Input label='Business Name' id='businessName' updateState={updateState} addValidField={addValidField}/>
        <Input label='Business Email' id='email' updateState={updateState} addValidField={addValidField}/>
        <Input label='Business Email' id='email' />
        {/* <Input label='Business email' id='email' type='email'/>
        <Input label='Create a Username' id='username'/>
        <Input label='Password' id='password' type='password' hint='6 characters | 1 uppercase | 1 lowercase | 1 digit'/>
        <Input label='Website' id='website' optional hint='(Optional)'/>
        <Select label='Type of Business' id='businessType' optional/>
        <Input label='Terms of Service' id='terms' type='checkbox'>
          <p className='checkBoxDescription'>I have read and I do accept <a href='/'>terms of services</a></p>
        </Input>
        <Input label='Privacy Policy' id='policy' type='checkbox'>
          <p className='checkBoxDescription'>I have read and I do accept <a href='/'>privacy policy</a></p>
        </Input> */}
        <Button name='Register' type='submit'/>
      </fieldset>
    </form>
  );
};

export default Form;