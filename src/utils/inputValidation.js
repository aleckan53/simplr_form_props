export default {
  businessName(str) {
    // 1-30 chars or numbers or special symbols
    // alternatively may check str.length
    const regex = /^[a-zA-Z0-9\s\W]{1,30}$/;
    return regex.test(str);
  },
  email(str) {
    // matches word (may has a dot or a hyfn) + @ + word(domain name) + . + com(2-3 char long)
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(str);
  },
  userName(str) {
    // 4-20 lower or upper case, or numbers
    const regex = /^[a-zA-Z0-9]{4,20}$/;
    return regex.test(str)
  },
  password(str) {
    // at least 1 digit, 1 lowerCase, 1 upperCase
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return regex.test(str)
  },
  website(str) {
    // matches url starting from http(s), www or a name
    const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    return regex.test(str);
  },
}