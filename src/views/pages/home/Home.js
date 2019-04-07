import React, {Component} from 'react';

import TextBlock from '../../components/text-block';
import PageWrapper from '../../components/page-wrapper';
import SectionWrapper from '../../components/section-wrapper';
import Button from '../../components/button';
import BrowserMockup from '../../components/browser-mockup';
import Confetti from '../../components/confetti';

import ENV from '../../../env';

import icon_chrome from '../../../images/icons/chrome.svg';
import icon_firefox from '../../../images/icons/firefox.svg';
import icon_merch from '../../../images/icons/merch.svg';
import icon_email from '../../../images/icons/email.svg';
import icon_fb from '../../../images/icons/facebook_gradient.svg';
import icon_in from '../../../images/icons/instagram_gradient.svg';
import icon_ln from '../../../images/icons/linkedin_gradient.svg';
import icon_tw from '../../../images/icons/twitter_gradient.svg';

import image_mockup from '../../../images/mockup.jpg';
import image_mockup_settings from '../../../images/mockup_settings.png';

import gif_mockup_save from '../../../images/mockup_save.gif';

import './Home.css';

const CLASS = 'sok-Home';

class Home extends Component {
	renderLandingSection = () => {
		return (
			<SectionWrapper className={CLASS + '-landing'}>
				<h1>30 Seconds of Knowledge</h1>
				<TextBlock>
					Become a <strong>better Developer</strong>, one <strong>New Tab</strong> at a time.
					<br />
					Get a random code snippet, from <strong>9 availabe categories</strong>,<br />
					that you can read and understand in <strong>30 seconds of less</strong>...
				</TextBlock>
				<div className={CLASS + '-landing-buttons'}>
					<Button
						href="https://chrome.google.com/webstore/detail/30-seconds-of-knowledge/mmgplondnjekobonklacmemikcnhklla"
						text="Add to Chrome"
						icon={icon_chrome}
					/>
					<Button
						href="https://addons.mozilla.org/en-US/firefox/addon/30-seconds-of-knowledge/"
						text="Add to Firefox"
						icon={icon_firefox}
					/>
					<Button
						href="https://github.com/petrovicstefanrs/30_seconds_of_knowledge"
						text="Github"
						secondary={true}
					/>
				</div>
				<BrowserMockup perspectivePop="top">
					<img src={image_mockup} alt="Extension Preview" />
				</BrowserMockup>
				<div className={CLASS + '-landing-blobs'} />
			</SectionWrapper>
		);
	};

	renderSnippetsSection = () => {
		return (
			<SectionWrapper className={CLASS + '-snippets'}>
				<div className={CLASS + '-snippets-left'}>
					<h2>~900 Snippets (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧</h2>
					<TextBlock>
						Each time you open a <strong>New Tab</strong>, you will get a random
						<strong>Code Snippet</strong> from a library of <strong>~900 snippets</strong>.
						<br />
						<br />
						There are <strong>9 Categories/Libraries</strong> of snippets,
						consisting of <strong>Programming Languages, Frameworks & Interview Questions</strong>, with
						more categories on the way!
						<br />
						<br />
						All snippets are written and tested by the <strong>community</strong>, and are ready to
						be <strong>Copy/Paste-ed</strong> into your codebase.
						<br />
						<br />
						<em>(Hint: Only CSS Snippets support Live Preview)</em>
					</TextBlock>
				</div>
				<div className={CLASS + '-snippets-right'}>
					<span data-lang="js" className={CLASS + '-snippets-chip'}>
						JavaScript
					</span>
					<span data-lang="react" className={CLASS + '-snippets-chip'}>
						React
					</span>
					<span data-lang="css" className={CLASS + '-snippets-chip'}>
						CSS
					</span>
					<span data-lang="python" className={CLASS + '-snippets-chip'}>
						Python
					</span>
					<span data-lang="php" className={CLASS + '-snippets-chip'}>
						PHP
					</span>
					<span data-lang="ruby" className={CLASS + '-snippets-chip'}>
						Ruby
					</span>
					<span data-lang="ramda" className={CLASS + '-snippets-chip'}>
						Ramda
					</span>
					<span data-lang="cpp" className={CLASS + '-snippets-chip'}>
						C++
					</span>
					<span data-lang="interview" className={CLASS + '-snippets-chip'}>
						Interview Questions
					</span>
				</div>
			</SectionWrapper>
		);
	};

	renderSavingFeatureSection = () => {
		return (
			<SectionWrapper className={CLASS + '-savefeature'}>
				<div className={CLASS + '-savefeature-left'}>
					<h2>٩( ๑╹ ꇴ╹)۶ Save for later</h2>
					<TextBlock>
						All snippets are designed to be understandable in <strong>30 Seconds or less</strong>,
						however you may not always have time, to read more than just the title. In case a
						snippet seems interesting, you can simply <strong>Save</strong> it for later.
						<br />
						<br />
						The extension comes with a <strong>library</strong> to hold your{' '}
						<strong>saved snippets</strong> which you can access anytime, from the extension
						interface.
					</TextBlock>
				</div>
				<div className={CLASS + '-savefeature-right'}>
					<BrowserMockup perspectivePop="left">
						<img src={gif_mockup_save} alt="Extension Save Feature Preview" />
					</BrowserMockup>
				</div>
			</SectionWrapper>
		);
	};

	renderSettingsFeatureSection = () => {
		return (
			<SectionWrapper className={CLASS + '-settingsFeature'}>
				<div className={CLASS + '-settingsFeature-left'}>
					<h2>Customizable (◕ᴥ◕ʋ)</h2>
					<TextBlock>
						You can customize your experience in the <strong>Settings Dropdown</strong> or the{' '}
						<strong>Settings Page</strong>.
						<br />
						<br />
						<strong>Enable/Disable</strong> any of the categories. This way you can get snippets
						only from those categories that interest you!
						<br />
						<br />
						Choose either <strong>Dark</strong> or <strong>Light</strong> theme, to preview both the
						extension and snippets in your desired style!
					</TextBlock>
				</div>
				<div className={CLASS + '-settingsFeature-right'}>
					<div className={CLASS + '-settingsFeature-mockup'}>
						<img src={image_mockup_settings} alt="Extension Settings Dropdown Preview" />
					</div>
				</div>
			</SectionWrapper>
		);
	};

	renderSupportSection = () => {
		return (
			<SectionWrapper className={CLASS + '-support'}>
				<div className={CLASS + '-support-top'}>
					<h2>ଘ(੭*ˊᵕˋ)੭*ˋ` Want to support us?</h2>
					<TextBlock>
						If you like <strong>30 Seconds of Knowledge</strong> and would like to{' '}
						<strong>support</strong> further development,
						<br />
						you can drop us <strong>a small donation</strong>, or buy yourself some{' '}
						<strong>fancy merch ԅ(≖‿≖ԅ)</strong>
					</TextBlock>
				</div>
				<div className={CLASS + '-support-buttons'}>
					<Button href="https://www.paypal.me/petrovicstefan/1" text="Donate" secondary={true} />
					<Button
						href="https://teespring.com/stores/30-seconds-of-knowledge"
						text="Merch Store"
						icon={icon_merch}
					/>
				</div>
				<Confetti numParticles={25} />
			</SectionWrapper>
		);
	};

	renderSocailSection = () => {
		return (
			<SectionWrapper className={CLASS + '-social'}>
				<div className={CLASS + '-social-top'}>
					<h2>( ｡◕‿◕｡) Get Social (^◡^ )</h2>
					<TextBlock>
						If you want to be informed when we add something <strong>new and exciting</strong>,
						<br /> you can subscribe to our <strong>mailing list</strong>,<br />
						or follow us on any of these <strong>social platforms</strong>:
					</TextBlock>
				</div>
				<div className={CLASS + '-social-buttons'}>
					<Button href={ENV.mailchimp.newsletter_url} text="Subscribe" icon={icon_email} />
					<div className={CLASS + '-social-buttons-platforms'}>
						<a href={ENV.social.facebook} alt="Follow on Facebook">
							<img src={icon_fb} alt="Facebook Icon" />
						</a>
						<a href={ENV.social.instagram} alt="Follow on Instagram">
							<img src={icon_in} alt="Instagram Icon" />
						</a>
						<a href={ENV.social.linkedin} alt="Follow on LinkedIn">
							<img src={icon_ln} alt="LinkedIn Icon" />
						</a>
						<a href={ENV.social.twitter} alt="Follow on Twitter">
							<img src={icon_tw} alt="Twitter Icon" />
						</a>
					</div>
				</div>
				<div className={CLASS + '-social-blobs'} />
			</SectionWrapper>
		);
	};

	renderPHButton = () => {
		return (
			<div className={CLASS + '-productHuntButton'}>
				<a
					href="https://www.producthunt.com/posts/30-seconds-of-knowledge?utm_source=badge-featured"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=144348&theme=light"
						alt="30 Seconds of Knowledge - Become a better developer, in every new tab. | Product Hunt Embed"
						width="192px"
						height="48px"
					/>
				</a>
			</div>
		);
	};

	render() {
		return (
			<PageWrapper className={CLASS}>
				{this.renderPHButton()}
				{this.renderLandingSection()}
				{this.renderSnippetsSection()}
				{this.renderSavingFeatureSection()}
				{this.renderSettingsFeatureSection()}
				{this.renderSupportSection()}
				{this.renderSocailSection()}
			</PageWrapper>
		);
	}
}

export default Home;
