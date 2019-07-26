import React from 'react';
import Input from './Input';
import Button from './Button';
import useInput from 'hooks/useInput';

const Form = () => {

  const { value: businessName, ...businessNameHandler } = useInput('Business Name', 'text', 'businessName');
  // const { value: email, ...emailHandler } = useInput('Business Email', 'email', 'email');
  // const { value: userName, ...userNameHandler } = useInput('Create a Username', 'text', 'userName');
  // const { value: password, ...passwordHandler } = useInput('Password', 'password', 'password');
  // const { value: website, ...webSiteHandler } = useInput('Website', 'text', 'website');
  const { value: terms, ...termsHandler } = useInput('Terms of Service', 'checkbox');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      businessName,
      terms
      // email,
      // userName,
      // password,
      // website,
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <Input {...businessNameHandler}/>
      {/* <Input {...emailHandler}/>
      <Input {...userNameHandler}/>
      <Input {...passwordHandler}/>
      <Input {...webSiteHandler}/>
      <Input type='submit'/> */}
      <Input {...termsHandler}/>
      <Button name='Register' type='submit'/>
    </form>
  )
}

export default Form;