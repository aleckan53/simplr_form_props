/* eslint-disable no-useless-escape */
export default {
  'Business email': (str) => {
    // matches word (may has a dot or a hyfn) + @ + word(domain name) + . + com(2-3 char long)
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return {
      isValid: regex.test(str),
      msg: 'Please enter a valid email address'
    };
  },
  'Create a username': (str) => {
    // 4-20 lower or upper case, or numbers
    const regex = /^[a-zA-Z0-9]{4,20}$/;
    return {
      isValid: regex.test(str),
      msg: 'Please enter a valid username'
    };
  },
  'Password': (str) => {
    // at least 1 digit, 1 lowerCase, 1 upperCase
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return {
      isValid: regex.test(str),
      msg: 'Please should have six characters'
    };
  },
};