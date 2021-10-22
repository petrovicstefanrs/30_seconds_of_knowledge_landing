import isEmail from 'is-email';

const validateEmail = (value) => {
  if (value == null || !isEmail(value)) {
    return 'Enter valid email address';
  }
  return undefined;
};

export default validateEmail;
