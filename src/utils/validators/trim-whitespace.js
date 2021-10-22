import isString from 'lodash/isString';

const trimWhiteSpace = (str) => {
  if (isString(str)) {
    return str.replace(/^\s+/, '').replace(/\s+$/, '');
  }
  return str;
};

export default trimWhiteSpace;
