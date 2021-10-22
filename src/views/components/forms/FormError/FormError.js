import React from 'react';
import { useFormState } from 'react-final-form';
import styles from './FormError.module.scss';

const FormError = () => {
  const { submitError, submitErrors, dirtySinceLastSubmit } = useFormState({
    subscription: {
      submitError: true,
      dirtySinceLastSubmit: true,
      submitErrors: true,
    },
  });

  if (dirtySinceLastSubmit) {
    return null;
  }
  let error = submitError;
  if (!error) {
    const errorFields = submitErrors ? Object.keys(submitErrors) : [];
    if (errorFields.length === 1) {
      error = submitErrors[errorFields[0]];
    } else if (errorFields.length > 1) {
      error = 'One or more fields have an error. Please check and try again.';
    }
  }
  if (!error) {
    return null;
  }

  return <div className={styles.error}>{error}</div>;
};

export default FormError;
