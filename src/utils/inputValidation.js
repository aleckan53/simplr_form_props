/* eslint-disable no-useless-escape */
export default {
  businessName(str) {
    // 1-30 chars or numbers or special symbols
    // alternatively may check str.length
    const regex = /^[a-zA-Z0-9\s\W]{1,30}$/;
    return {
      isValid: regex.test(str),
      msg: 'Please enter a valid Business Name'
    };
  },
  email(str) {
    // matches word (may has a dot or a hyfn) + @ + word(domain name) + . + com(2-3 char long)
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return {
      isValid: regex.test(str),
      msg: 'Please enter a valid email address'
    };
  },
  userName(str) {
    // 4-20 lower or upper case, or numbers
    const regex = /^[a-zA-Z0-9]{4,20}$/;
    return {
      isValid: regex.test(str),
      msg: 'Please enter a valid username'
    };
  },
  password(str) {
    // at least 1 digit, 1 lowerCase, 1 upperCase
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return {
      isValid: regex.test(str),
      msg: 'Please should have six characters'
    };
  },
  website(str) {
    // matches url starting from http(s), www or a name
    const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    return {
      isValid: regex.test(str),
      msg: 'Please enter a valid url'
    };
  },
}