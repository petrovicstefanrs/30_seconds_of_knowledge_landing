import React from 'react';
import PropTypes from 'prop-types';

import './BrowserMockup.css';

const CLASS = 'sok-BrowserMockup';

const PERSPECTIVE_POP = {
	top: 'top',
	bottom: 'bottom',
	left: 'left',
	right: 'right',
};

const BrowserMockup = ({className, withScroll = false, children, perspectivePop}) => {
	const scrollClassName = withScroll ? CLASS + '-content-withScroll' : '';
	const perspectivePopClassName = perspectivePop
		? CLASS + '-' + PERSPECTIVE_POP[perspectivePop]
		: '';

	return (
		<div className={CLASS + '-perspective'}>
			<div className={CLASS + ' ' + className + ' ' + perspectivePopClassName}>
				<div className={CLASS + '-content ' + scrollClassName}>{children}</div>
				<span className={CLASS + '-controls'} />
			</div>
		</div>
	);
};

BrowserMockup.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.func]),
};

BrowserMockup.defaultProps = {
	className: '',
};

export default BrowserMockup;
