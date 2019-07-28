import React, { useContext, useState, useEffect } from 'react';
import FormContext from 'context/FormContext';
import { Input, Select, Button } from 'components';
import useFormState from 'hooks/useFormState';

const Form = () => {


  const onSubmit = e => {
    e.preventDefault();
    console.log(`POST data to server`);
  };

  const { state, onChange } = useFormState();

  return (
    <form className='form' onSubmit={onSubmit}>
      <fieldset>
      <legend>LET'S GET STARTED</legend>
        <Input label='Business Name' id='businessName' onChange={onChange}/>
        <Input label='Business Email' id='businessName' onChange={onChange}/>
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