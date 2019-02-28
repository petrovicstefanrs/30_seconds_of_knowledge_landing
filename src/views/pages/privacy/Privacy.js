import React, {Component} from 'react';

import TextBlock from '../../components/text-block';
import PageWrapper from '../../components/page-wrapper';
import SectionWrapper from '../../components/section-wrapper';

import './Privacy.css';

const CLASS = 'sok-Privacy';

class Privacy extends Component {
	renderPrivacySection = () => {
		return (
			<SectionWrapper className={CLASS + '-content'}>
				<h2>Privacy Policy</h2>
				<TextBlock>
					<strong>Your privacy is important to us.</strong> It is{' '}
					<strong>30 Seconds Of Knowledge's</strong> policy to <strong>respect your privacy</strong>
					regarding any information <strong>we may collect</strong> from you across our website,
					<a href="https://30secondsofknowledge.com/">https://30secondsofknowledge.com/</a>, and
					other sites we own and operate.
				</TextBlock>
				<TextBlock>
					We only ask for personal information <strong>when we truly need it</strong> to provide a
					service to you. We collect it by <strong>fair and lawful means</strong>, with your{' '}
					<strong>knowledge and consent</strong>. We also let you know why we’re collecting it and
					how it will be used.
				</TextBlock>
				<TextBlock>
					We only retain collected information for <strong>as long as necessary</strong> to provide
					you with your requested service. What data we store, we’ll protect within commercially
					acceptable means to{' '}
					<strong>
						prevent loss and theft, as well as unauthorised access, disclosure, copying, use or
						modification.
					</strong>
				</TextBlock>
				<TextBlock>
					<strong>We don’t share any personally identifying information</strong> publicly or with
					third-parties, except when required to by law.
				</TextBlock>
				<TextBlock>
					Our website may link to external sites that are not operated by us. Please be aware that
					<strong> we have no control</strong> over the content and practices of these sites, and
					<strong> cannot accept responsibility or liability</strong> for their respective privacy
					policies.
				</TextBlock>
				<TextBlock>
					You are <strong>free to refuse</strong> our request for your personal information, with
					the understanding that we may be unable to provide you with some of your desired services.
				</TextBlock>
				<TextBlock>
					Your continued use of our website will be <strong>regarded as acceptance</strong> of our
					practices around privacy and personal information. If you have any questions about how we
					handle user data and personal information,
					<strong>feel free to</strong> <a href="mailto:petrovic.stefan.rs@gmail.com">contact us</a>
					.
				</TextBlock>
				<TextBlock>
					This policy is effective as of <strong>3 February 2019</strong>.
				</TextBlock>
				<div className={CLASS + '-landing-blobs'} />
			</SectionWrapper>
		);
	};

	render() {
		return <PageWrapper className={CLASS}>{this.renderPrivacySection()}</PageWrapper>;
	}
}

export default Privacy;
