import React, {Component} from 'react';
import PropTypes from 'prop-types';
import lodashMap from 'lodash/map';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

import * as routes from '../../../app/routes';

import logoSrc from '../../../images/logo_light.png';

import './MainMenu.css';

const CLASS = 'sok-MainMenu';

const MENU_ITEMS = {
	home: {
		name: 'Home',
		href: routes.HOME,
		type: Link,
	},
	download: {
		name: 'Download',
		href:
			'https://chrome.google.com/webstore/detail/30-seconds-of-knowledge/mmgplondnjekobonklacmemikcnhklla',
		type: 'a',
	},
	press_kit: {
		name: 'Press Kit',
		href: '/press_kit.zip',
		type: 'a',
		download: true,
	},
	merch_store: {
		name: 'Merch Shop',
		href: 'https://teespring.com/stores/30-seconds-of-knowledge',
		type: 'a',
	},
};

class MainMenu extends Component {
	static propTypes = {
		location: PropTypes.object.isRequired,
	};

	renderMenuItems = () => {
		const {location} = this.props;
		const items = MENU_ITEMS;

		return lodashMap(items, (value, key) => {
			const isDownloadLink = value.download || false;

			const activeClass = location.pathname === value.href ? CLASS + '-link-active' : '';

			return value.type === Link ? (
				<Link to={value.href} key={key} className={CLASS + '-link ' + activeClass}>
					{value.name}
				</Link>
			) : (
				<a
					href={value.href}
					key={key}
					target={isDownloadLink ? '_self' : '_blank'}
					className={CLASS + '-link '}
					download={isDownloadLink}
				>
					{value.name}
				</a>
			);
		});
	};

	render() {
		return (
			<div className={CLASS}>
				<div className={CLASS + '-wrapper'}>
					<div className={CLASS + '-logo'}>
						<Link to={routes.HOME}>
							<img src={logoSrc} alt="30 Seconds of Knowledge Logo" />
						</Link>
					</div>
					<div className={CLASS + '-content'}>{this.renderMenuItems()}</div>
				</div>
			</div>
		);
	}
}

export default withRouter(MainMenu);
