import React, {Component} from 'react';

import TextBlock from '../../components/text-block';
import PageWrapper from '../../components/page-wrapper';
import SectionWrapper from '../../components/section-wrapper';

import './TOS.css';

const CLASS = 'sok-TOS';

class TOS extends Component {
	renderTOSSection = () => {
		return (
			<SectionWrapper className={CLASS + '-content'}>
				<h2>30 Seconds Of Knowledge Terms of Service</h2>
				<h3>1. Terms</h3>
				<TextBlock>
					By accessing the website at <a href="https://30secondsofknowledge.com/">https://30secondsofknowledge.com/</a>, you are agreeing to be bound by these <strong>terms of service</strong>, all applicable laws and regulations, and agree that <strong>you are responsible for compliance with any applicable local laws</strong>. If you <strong>do not agree</strong> with any of these terms, you <strong>are prohibited</strong> from using or accessing this site. The materials contained in this website are <strong>protected by applicable copyright and trademark law.</strong>
				</TextBlock>
				<h3>2. Use License</h3>
				<TextBlock>
					<ol type="a">
						<li>Permission is granted to temporarily download one copy of the materials (information or software) on <strong>30 Seconds Of Knowledge's</strong> website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
						<ol type="i">
							<li>modify or copy the materials;</li>
							<li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
							<li>attempt to decompile or reverse engineer any software contained on <strong>30 Seconds Of Knowledge's</strong> website;</li>
							<li>remove any copyright or other proprietary notations from the materials; or</li>
							<li>transfer the materials to another person or "mirror" the materials on any other server.</li>
						</ol>
						</li>
						<li>This license shall automatically terminate if you violate any of these restrictions and may be terminated by <strong>30 Seconds Of Knowledge</strong> at any time. Upon terminating your viewing of these materials or upon the termination of this license, <strong>you must destroy</strong> any downloaded materials in your possession whether in electronic or printed format.</li>
					</ol>
				</TextBlock>
				<h3>3. Disclaimer</h3>
				<TextBlock>
				<ol type="a">
					<li>The materials on <strong>30 Seconds Of Knowledge's</strong> website are provided on an 'as is' basis. <strong>30 Seconds Of Knowledge</strong> makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</li>
					<li>Further, <strong>30 Seconds Of Knowledge</strong> does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</li>
				</ol>
				</TextBlock>
				<h3>4. Limitations</h3>
				<TextBlock>
					In no event shall <strong>30 Seconds Of Knowledge</strong> or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on <strong>30 Seconds Of Knowledge's</strong> website, even if <strong>30 Seconds Of Knowledge</strong> or a <strong>30 Seconds Of Knowledge</strong> authorized representative has been notified orally or in writing of the possibility of such damage. Because <strong>some jurisdictions do not allow limitations</strong> on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
				</TextBlock>
				<h3>5. Accuracy of materials</h3>
				<TextBlock>
					The materials appearing on <strong>30 Seconds Of Knowledge's</strong> website could include technical, typographical, or photographic errors. <strong>30 Seconds Of Knowledge</strong> does not warrant that any of the materials on its website are accurate, complete or current. <strong>30 Seconds Of Knowledge</strong> may make changes to the materials contained on its website at any time without notice. However <strong>30 Seconds Of Knowledge</strong> does not make any commitment to update the materials.
				</TextBlock>
				<h3>6. Links</h3>
				<TextBlock>
					<strong>30 Seconds Of Knowledge</strong> has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by <strong>30 Seconds Of Knowledge</strong> of the site. Use of any such linked website is at the user's own risk.
				</TextBlock>
				<h3>7. Modifications</h3>
				<TextBlock>
					<strong>30 Seconds Of Knowledge</strong> may revise these <strong>terms of service</strong> for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these <strong>terms of service</strong>.
				</TextBlock>
				<h3>8. Governing Law</h3>
				<TextBlock>
					These <strong>terms and conditions</strong> are governed by and construed <strong>in accordance with the laws of Serbia</strong> and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
				</TextBlock>
				<div className={CLASS + '-landing-blobs'} />
			</SectionWrapper>
		);
	};

	render() {
		return <PageWrapper className={CLASS}>{this.renderTOSSection()}</PageWrapper>;
	}
}

export default TOS;
