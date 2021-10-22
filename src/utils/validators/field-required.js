import trimWhiteSpace from './trim-whitespace';

const fieldRequired = (value) => {
  if (value == null || trimWhiteSpace(value) === '') {
    return 'This field is required!';
  }
  return undefined;
};

export default fieldRequired;
