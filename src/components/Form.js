import React from 'react';
import Input from './Input';
import useInput from 'hooks/useInput';

const Form = () => {

  const { value: businessName, ...businessNameHandler } = useInput('Business Name', 'text');
  const { value: email, ...emailHandler } = useInput('Business Email', 'email');
  const { value: userName, ...userNameHandler } = useInput('Create a Username', 'text');
  const { value: password, ...passwordHandler } = useInput('Password', 'password');
  const { value: website, ...webSiteHandler } = useInput('Website', 'text');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      businessName
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <Input {...businessNameHandler}/>
      <Input {...emailHandler}/>
      <Input {...userNameHandler}/>
      <Input {...passwordHandler}/>
      <Input {...webSiteHandler}/>
      <Input type='submit'/>
    </form>
  )
}

export default Form;