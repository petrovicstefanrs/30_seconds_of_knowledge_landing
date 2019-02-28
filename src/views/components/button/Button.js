import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const CLASS = 'sok-Button';

const ICON_POSITIONS = {
	left: 'left',
	right: 'right',
};

const BUTTON_TYPES = {
	button: 'div',
	link: 'a',
};

const Button = ({text, icon, iconPos, onClick, href, disabled, secondary = false, linkTarget = '_blank'}) => {
	const handleClick = () => {
		onClick && !disabled && onClick();
	};

	const Type = href ? BUTTON_TYPES.link : BUTTON_TYPES.button;
	const positionClass = ` ${CLASS}-${iconPos}`;
	const disabledClass = disabled ? ` ${CLASS}-disabled` : '';
	const secondaryClass = secondary ? ` ${CLASS}-secondary` : '';

	return Type === BUTTON_TYPES.link ? (
		<a
			className={CLASS + positionClass + disabledClass + secondaryClass}
			href={href}
			target={linkTarget}
			rel="noopener noreferrer"
		>
			{icon && <img className={CLASS + '-icon'} src={icon} alt={text + ' icon'} />}
			<span className={CLASS + '-text'}>{text}</span>
		</a>
	) : (
		<Type className={CLASS + positionClass + disabledClass + secondaryClass} onClick={handleClick} href={href}>
			{icon && <img className={CLASS + '-icon'} src={icon} alt={text + ' icon'} />}
			<span className={CLASS + '-text'}>{text}</span>
		</Type>
	);
};

Button.propTypes = {
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.object]),
	icon: PropTypes.string,
	iconPos: PropTypes.oneOf([ICON_POSITIONS.left, ICON_POSITIONS.right]),
	onClick: PropTypes.func,
	href: PropTypes.string,
	disabled: PropTypes.bool,
};

Button.defaultProps = {
	iconPos: ICON_POSITIONS.left,
	disabled: false,
};

export default Button;
