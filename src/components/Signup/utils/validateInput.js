import validator from 'validator';

const validateInput = (index, value, form) => {
  let error = '';
  switch (index) {
    case 0:
    case 1:
      if (!validator.isAlpha(value)) {
        error = 'can only contain alphabets';
      }
      if (!validator.isLength(value, { min: 2, max: 15 })) {
        error = 'must be minimum 2 and maximum 15 characters';
      }
      break;
    case 2:
      if (!validator.isEmail(value)) {
        error = 'must be a valid email';
      }
      break;
    case 3:
      if (!validator.isLength(value, { min: 6, max: 10 })) {
        error = 'minimum 6 and maximum 10 characters';
      }
      break;
    case 4:
      if (value !== form[3].value) {
        error = 'must match password';
      }
      break;
    default:
      break;
  }
  return error;
};

export default validateInput;
