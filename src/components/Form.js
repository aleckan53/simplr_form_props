import React from 'react';
import Input from './Input';
import Button from './Button';
import useInput from 'hooks/useInput';
import useValidAll from 'hooks/useValidAll';

const Form = () => {

  const { value: businessName, valid: bValid, ...businessNameHandler } = useInput('Business Name', 'businessName');
  const { value: terms, valid: termsValid, ...termsHandler } = useInput('Terms of Service', 'terms', 'checkbox');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      businessName,
      terms
    });
  }

  const { allValid } = useValidAll(termsValid);

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
      <legend>LET'S GET STARTED</legend>
        <Input {...businessNameHandler}/>
        <Input {...termsHandler}>
          <p>I have read and I do accept <a href='www.google.com'>terms of services</a></p>
        </Input>
        <Button name='Register' type='submit' disabled={allValid}/>
      </fieldset>
    </form>
  )
}

export default Form;