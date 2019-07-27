/* eslint-disable no-useless-escape */
export default {
  email(str) {
    // matches word (may has a dot or a hyfn) + @ + word(domain name) + . + com(2-3 char long)
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return {
      isValid: regex.test(str),
      msg: 'Please enter a valid email address'
    };
  },
  username(str) {
    // 4-20 lower or upper case, or numbers
    const regex = /^[a-zA-Z0-9]{4,20}$/;
    const specialChars = /\W/;

    const hint = specialChars.test(str) ? 'not have special characters'
      : 'have 4-20 characters';

    return {
      isValid: regex.test(str),
      msg: `Username should ${hint}`,
    };
  },
  password(str='') {
    // at least 1 digit, 1 lowerCase, 1 upperCase
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const length = /\w{6,}/;
    const hasLowerCase = /[a-z]/;
    const hasUpperCase= /[A-Z]/;

    const hint = !length.test(str) ? 'six characters' 
      : !hasUpperCase.test(str) ? 'one uppercase'
      : !hasLowerCase.test(str) ? 'one lowercase'
      : 'one digit';

    return {
      isValid: regex.test(str),
      msg: `Password should have ${hint}`,
    };
  },
  businessName(str) {
    const regex = /\w{2,}/;

    return {
      isValid: regex.test(str),
      msg: `Please enter a valid Business Name`,
    };
  }
};