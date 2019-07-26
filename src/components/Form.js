import React from 'react';

import Input from './Input';
import Button from './Button';
import Select from './Select';

import useInput from 'hooks/useInput';
import useValidAll from 'hooks/useValidAll';
import useSelect from 'hooks/useSelect';

const Form = () => {
  // input handlers 3rd argument default = 'text'
  const { value: businessName, valid: busNameValid, ...businessNameHandler } = useInput('Business Name', 'businessName');
  const { value: businessEmail, valid: busEmailValid, ...businessEmailHandler } = useInput('Business Email', 'email', 'email');
  const { value: userName, valid: userNameValid, ...userNameHandler } = useInput('Create a Username', 'userName');
  const { value: password, valid: passwordValid, ...passwordNameHandler } = useInput('Password', 'password', 'password');
  const { value: website, valid: websiteValid, ...websiteHandler } = useInput('Website', 'website');
  const { value: terems, valid: terms, ...termsHandler } = useInput('Terms of Service', 'terms', 'checkbox');
  const { value: polcy, valid: policy, ...policyHandler } = useInput('Privacy Policy', 'policy', 'checkbox');
  const { value: selectBusiness, ...selectHandler } = useSelect(['Logistics', 'E-commerce', 'Retail', 'Not sure'])

  // enables button when all field are valid and checkboxes checked
  const { allValid } = useValidAll(busNameValid, busEmailValid, userNameValid, passwordValid, terms, policy);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      businessName,
      selectBusiness
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
      <legend>LET'S GET STARTED</legend>
        <Input {...businessNameHandler}/>
        <Input {...businessEmailHandler}/>
        <Input {...userNameHandler}/>
        <Input {...passwordNameHandler}/>
        <Input {...websiteHandler}/>
        <Select {...selectHandler}/>
        <Input {...termsHandler}>
          <p>I have read and I do accept <a href='www.google.com'>terms of services</a></p>
        </Input>
        <Input {...policyHandler}>
          <p>I have read and I do accept <a href='www.google.com'>privacy policy</a></p>
        </Input>
        <Button name='Register' type='submit' disabled={allValid}/>
      </fieldset>
    </form>
  )
}

export default Form;