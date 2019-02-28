import React, {Component} from 'react';
import PropTypes from 'prop-types';
import lodashMap from 'lodash/map';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

import TextBlock from '../text-block';

import * as routes from '../../../app/routes';

import './Footer.css';

const CLASS = 'sok-Footer';

const MENU_ITEMS = {
	home: {
		name: 'Home',
		href: routes.HOME,
		type: Link,
	},
	privacy: {
		name: 'Privacy',
		href: routes.PRIVACY,
		type: Link,
	},
	tos: {
		name: 'ToS',
		href: routes.TOS,
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
		name: 'Buy Merch',
		href: 'https://teespring.com/stores/30-seconds-of-knowledge',
		type: 'a',
	},
};

class Footer extends Component {
	static propTypes = {
		location: PropTypes.object.isRequired,
	};

	renderFooterItems = () => {
		const items = MENU_ITEMS;

		return lodashMap(items, (value, key) => {
			const isDownloadLink = value.download || false;

			return value.type === Link ? (
				<Link to={value.href} key={key} className={CLASS + '-link '}>
					{value.name}
				</Link>
			) : (
				<a
					href={value.href}
					key={key}
					target={'_blank'}
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
					<div className={CLASS + '-left'}>
						<TextBlock>
							<span role="img" aria-label="Wave emoji">
								👋
							</span>
							<br />
							<br />
							<strong>30 Seconds of Knowledge</strong> is created, written, and maintained by
							<br />
							<a href="https://petrovicstefan.rs">Petrovic Stefan</a> and a team of contributors on
							github.
						</TextBlock>
					</div>
					<div className={CLASS + '-right'}>{this.renderFooterItems()}</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Footer);
