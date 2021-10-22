const getFieldError = ({
  touched,
  error,
  submitError,
  dirtySinceLastSubmit,
}) => {
  if (touched && error) {
    return error;
  }
  if (!dirtySinceLastSubmit && submitError) {
    return submitError;
  }
  return null;
};

export default getFieldError;
