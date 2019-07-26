import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import useInput from 'hooks/useInput';

const Form = () => {

  const { value: businessName, ...businessNameHandler } = useInput('Business Name', 'businessName');
  const { value: terms, ...termsHandler } = useInput('Terms of Service', 'terms', 'checkbox');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      businessName,
      terms
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
      <legend>LET'S GET STARTED</legend>
        <Input {...businessNameHandler}/>
        <Input {...termsHandler}>
          <p>I have read and I do accept <a href='www.google.com'>terms of services</a></p>
        </Input>
        <Button name='Register' type='submit' disabled/>
      </fieldset>
    </form>
  )
}

export default Form;