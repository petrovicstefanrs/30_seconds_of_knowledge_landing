import React from 'react';
import PropTypes from 'prop-types';

import './SectionWrapper.css';

const CLASS = 'sok-SectionWrapper';

const SectionWrapper = ({className, children}) => {
	return <div className={CLASS + ' ' + className}>{children}</div>;
};

SectionWrapper.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.func]),
};

SectionWrapper.defaultProps = {
	className: '',
};

export default SectionWrapper;
