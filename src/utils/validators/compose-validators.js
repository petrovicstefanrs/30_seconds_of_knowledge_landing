const composeValidators = (...validators) => (value, formValues) =>
  validators.reduce(
    (error, validator) => error || validator(value, formValues),
    undefined,
  );

export default composeValidators;
