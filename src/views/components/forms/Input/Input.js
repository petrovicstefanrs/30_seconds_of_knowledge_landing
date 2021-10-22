import PropTypes from 'prop-types';
import React from 'react';
import Label from '../Label';
import PlainInput from './PlainInput';
import getFieldError from '../../../../utils/validators/get-field-error';
import FieldInfo from '../FieldInfo';

import './Input.css';

const Input = ({
  input,
  id,
  label,
  placeholder,
  type,
  children,
  autoComplete,
  disabled,
  help,
  meta,
  icon: Icon,
  as,
}) => {
  const error = getFieldError(meta);

  return (
    <div className="inputContainer">
      {Icon && <Icon />}
      {label ? (
        <Label
          name={input.name}
          text={label}
          htmlFor={input.name}
          id={`label-${id || input.name}`}
        />
      ) : null}
      <PlainInput
        aria-labelledby={`label-${input.name}`}
        id={id || input.name}
        type={type}
        disabled={disabled}
        autoComplete={autoComplete}
        placeholder={placeholder || ''}
        as={as}
        {...input}
      />
      {children}
      <FieldInfo error={error} help={help} value={input.value} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.node,
  icon: PropTypes.func,
  type: PropTypes.string,
  id: PropTypes.string,
  autoComplete: PropTypes.string,
  input: PropTypes.object,
  inputStyle: PropTypes.object,
  style: PropTypes.object,
  meta: PropTypes.object,
  className: PropTypes.string,
  help: FieldInfo.propTypes.help,
  children: PropTypes.node,
  labelClassName: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  as: PropTypes.string,
};

Input.defaultProps = {
  meta: {},
};

export default Input;
