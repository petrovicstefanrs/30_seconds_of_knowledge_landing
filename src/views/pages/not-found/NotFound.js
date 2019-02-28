import React from 'react';

import Button from '../../components/button';
import PageWrapper from '../../components/page-wrapper';
import SectionWrapper from '../../components/section-wrapper';
import TextBlock from '../../components/text-block';

import * as routes from '../../../app/routes';

import image_ghost from '../../../images/icons/empty.svg';

import './NotFound.css';

const CLASS = 'sok-NotFound';

const NotFound = () => (
	<PageWrapper orientation="horizontal" className={CLASS}>
		<SectionWrapper className={CLASS+'-section'}>
			<img src={image_ghost} alt="Ghost Illustration" />
			<h2>404 Not Found</h2>
			<TextBlock>
				Ooops... There's <strong>nothing</strong> here!
				<br />
				<strong>Only ghosts!</strong>
			</TextBlock>
			<Button linkTarget='_self' href={routes.HOME} text="Go Back Home" />
		</SectionWrapper>
	</PageWrapper>
);

export default NotFound;
