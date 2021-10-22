/* eslint jsx-a11y/label-has-associated-control: 0, jsx-a11y/label-has-for: 0 */
import PropTypes from 'prop-types';
import React from 'react';

import './Label.css';

const Label = ({ text, style, className, ...props }) => (
  <label // eslint-
    aria-label={text}
    {...props}
  >
    {text}
  </label>
);

Label.propTypes = {
  text: PropTypes.node,
  name: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  hidden: PropTypes.bool,
};

Label.defaultProps = {
  hidden: false,
};

export default Label;
