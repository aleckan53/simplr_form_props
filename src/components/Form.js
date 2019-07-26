import React from 'react';

import Input from './Input';
import Button from './Button';
import Select from './Select';

import useInput from 'hooks/useInput';
import useValidAll from 'hooks/useValidAll';
import useSelect from 'hooks/useSelect';

const Form = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      // businessName,
      // selectBusiness
    });
  }


  return (
    <form className='form' onSubmit={onSubmit}>
      <fieldset>
      <legend>LET'S GET STARTED</legend>
        <Input name='Business name'/>
        <Input name='Business email' checkValid='email'/>
        {/* <Input {...userNameHandler}/>
        <Input {...passwordNameHandler}/>
        <Input {...websiteHandler}/>
        <Select {...selectHandler}/>
        <Input {...termsHandler}>
          <p className='checkBoxDescription'>I have read and I do accept <a href='www.google.com'>terms of services</a></p>
        </Input>
        <Input {...policyHandler}>
          <p className='checkBoxDescription'>I have read and I do accept <a href='www.google.com'>privacy policy</a></p>
        </Input> */}
        {/* <Button name='Register' type='submit' disabled={allValid}/> */}
      </fieldset>
    </form>
  )
}

export default Form;