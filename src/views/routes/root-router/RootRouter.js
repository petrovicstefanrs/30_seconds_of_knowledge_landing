import React, {Component} from 'react';
import {Switch} from 'react-router-dom';
import {withRouter, Route} from 'react-router';
import posed, {PoseGroup} from 'react-pose';

import Home from '../../pages/home';
import NotFound from '../../pages/not-found';
import Privacy from '../../pages/privacy';
import TOS from '../../pages/tos';

import MainMenu from '../../components/main-menu';
import Footer from '../../components/footer/Footer';

import * as routes from '../../../app/routes';

const ANIMATTION_DELAY = 500;

const RouteContainer = posed.div({
	enter: {opacity: 1, delay: ANIMATTION_DELAY, beforeChildren: true},
	exit: {opacity: 0},
});

class RootRouter extends Component {
	componentDidUpdate(prevProps) {
		const {location: prevLocation} = prevProps;
		const {location} = this.props;

		if (prevLocation.pathname !== location.pathname) {
			setTimeout(() => {
				document.body.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			}, ANIMATTION_DELAY);
		}
	}

	renderApp() {
		const {location} = this.props;
		const animationKey = location ? location.pathname : '_pose_animaton_key';
		return (
			<PoseGroup>
				<RouteContainer key={animationKey}>
					{/*
					 * Giving location object to Switch is some
					 * fiddly diddly shit that POSE requires to work correctly...
					 */}
					<Switch location={location}>
						<Route exact name="Home" path={routes.HOME} component={Home} />
						<Route exact name="Privacy Policy" path={routes.PRIVACY} component={Privacy} />
						<Route exact name="Terms Of Service" path={routes.TOS} component={TOS} />
						<Route name="Not Found" path="*" component={NotFound} />
					</Switch>
				</RouteContainer>
			</PoseGroup>
		);
	}

	render() {
		return (
			<React.Fragment>
				<MainMenu />
				{this.renderApp()}
				<Footer />
			</React.Fragment>
		);
	}
}

export default withRouter(RootRouter);
