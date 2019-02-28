import React from 'react';
import PropTypes from 'prop-types';
import ConfettiGenerator from './effects/ConfettiGenerator';

import './Confetti.css';

const CLASS = 'sok-Confetti';

export default class Confetti extends React.PureComponent {
	static propTypes = {
		width: PropTypes.number,
		height: PropTypes.number,
		numParticles: PropTypes.number,
		className: PropTypes.string,
	};

	static defaultProps = {
		className: '',
	};

	constructor(props) {
		super(props);
		this.targetElement = React.createRef();
		this.confetti = null;
	}

	componentDidMount() {
		const {width, height, numParticles} = this.props;
		this.confetti = new ConfettiGenerator({
			target: this.targetElement.current,
			width,
			height,
			numParticles,
		});
	}

	// componentWillReceiveProps(nextProps) {
	// this.confetti
	// 	.numberOfPieces(nextProps.numberOfPieces)
	// 	.confettiSource(nextProps.confettiSource)
	// 	.friction(nextProps.friction)
	// 	.wind(nextProps.wind)
	// 	.gravity(nextProps.gravity)
	// 	.colors(nextProps.colors)
	// 	.opacity(nextProps.opacity)
	// 	.recycle(nextProps.recycle)
	// 	.run(nextProps.run);
	// }

	render() {
		const {className} = this.props;

		return <div className={CLASS + ' ' + className} ref={this.targetElement} />;
	}
}
