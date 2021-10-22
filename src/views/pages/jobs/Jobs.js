import React, {Component} from 'react';
import { Field, Form } from 'react-final-form';
import Input from '../../components/forms/Input';
import Button from '../../components/button';
import PageWrapper from '../../components/page-wrapper';
import SectionWrapper from '../../components/section-wrapper';

import './Jobs.css';

const CLASS = 'sok-Jobs';

class Jobs extends Component {
	renderJobsSection = () => {
		return (
			<SectionWrapper className={CLASS + '-content'}>
                <p className="subtitle">Get your job posting more exposure</p>
				<h1 className="title">Reach out comunity of more then 20k+ active developers worldwide!</h1>
				<p>Become a better Developer, one New Tab at a time.
                    Get a random code snippet, from 9 availabe categories,
                    that you can read and understand in 30 seconds of less
                </p>
                <img src="https://img.shields.io/chrome-web-store/users/mmgplondnjekobonklacmemikcnhklla?label=active%20users" alt="count"/>
                <div className="wrapper">
                    <div className="form">
                        <h2 className="title">Tell us about your job</h2>
                        <Form
                            onSubmit={() => {
                                console.log('asdasdasdasdas')
                            }}
                            subscription={{
                                values: true,
                              }}
                        >
                            {({ handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <Field
                                    name="title"
                                    component={Input}
                                    type="text"
                                    placeholder="Job Title"
                                    help="Example: Senior JavaScript Engineer"
                                />
                                <Field
                                    name="companyName"
                                    component={Input}
                                    type="text"
                                    placeholder="Company Name"
                                    help="Enter your company or organization’s name."
                                />
                                <Field
                                    name="email"
                                    component={Input}
                                    type="text"
                                    placeholder="Email"
                                    help="Enter your email address."
                                />
                                <Field
                                    name="url"
                                    component={Input}
                                    type="text"
                                    placeholder="Apply job URL"
                                    help="Not sure what here"
                                />
                                <div className="photoUpload">
                                    <h3>Company logo</h3>
                                <Field
                                    name="logo"
                                    component={Input}
                                    type="file"
                                    placeholder="Company logo"
                                />
                                </div>
                                <Button
                                    submitButton={true}
                                    className="peki"
                                    text="Post a job!"
                                    type="submit"
                                />
                            </form>
                            )}
                        </Form>
                    </div>
                    <div className="preview">
                        <h2 className="title">Preview advertisement</h2>
                        <div className="exampleCard">
                            <div className="content">
                                <div className="logo">
                                </div>
                                <div className="jobInfo">
                                    <div className="company">Company Name</div>
                                    <div className="title">Job Title</div>
                                    <div className="seniority">Seniority</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
		);
	};

    renderPHButton = () => {
		return (
			<div className={CLASS + '-productHuntButton'}>
				<a href="https://www.producthunt.com/posts/30-seconds-of-knowledge?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-30-seconds-of-knowledge" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=144348&theme=light&period=daily" alt="30 Seconds of Knowledge - Become a better developer, in every new tab. | Product Hunt" style={{width: 250, height: 54}} width="250" height="54" /></a>
			</div>
		);
	};

	render() {
		return (
        <PageWrapper className={CLASS}>
            {this.renderJobsSection()}
            {this.renderPHButton()}
        </PageWrapper>);
	}
}

export default Jobs;
