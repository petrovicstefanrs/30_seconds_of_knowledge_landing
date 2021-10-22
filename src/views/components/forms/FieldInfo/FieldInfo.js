import PropTypes from 'prop-types';
import React from 'react';

import './FieldInfo.css';

const FieldInfo = ({ error, help, value }) => {
  if (error) {
    return <span>{error}</span>;
  }
  return (
    <span className="info">
      {typeof help === 'function' ? help(value) : help}
    </span>
  );
};

FieldInfo.propTypes = {
  error: PropTypes.string,
  help: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.node]),
  value: PropTypes.any,
};

export default FieldInfo;
