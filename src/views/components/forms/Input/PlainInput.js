import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const PlainInput = ({ as: As, className, ...props }) => (
  <As className="input" {...props} />
);

PlainInput.defaultProps = {
  as: 'input',
};

PlainInput.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
};

export default PlainInput;
