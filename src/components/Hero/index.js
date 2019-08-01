import React from 'react';

import CTA from '../CTA';
import SocialLinks from '../SocialLinks';

import '../../styles/hero.scss';

import github from '../../images/social/github.svg';
import twitter from '../../images/social/twitter.svg';
import medium from '../../images/social/medium.svg';
import linkedin from '../../images/social/linkedin.svg';
import email from '../../images/social/email.svg';

const links = [
    {
        href: 'https://github.com/desdevcharan',
        title: 'Github',
        image: github,
    },
    {
        href: 'https://twitter.com/this_is_KCB',
        title: 'Twitter',
        image: twitter,
    },
    {
        href: 'https://medium.com',
        title: 'Medium',
        image: medium,
    },
    {
        href: 'https://www.linkedin.com/in/charanbabukarnam/',
        title: 'Linkedin',
        image: linkedin,
    },
    {
        href: 'mailto:charanbabukarnam@gmail.com',
        title: 'Email',
        image: email,
    }
]

const Hero = () => (
    <div className="hero">
        <div className="container">
            <h1 className="t-bold t-mtb-15">
                Hey! 👋 I'm Charanbabu Karnam
            </h1>
            <h2 className="t-regular t-mtb-15">
                Web Engineer at Deloitte LLP and a JS Lover
            </h2>
{/* https://github.com/DesDevCharan/todo-tracker/blob/master/Charan%20Neat%20Resume-converted.pdf */}
            <CTA type="primary" inline external to="https://github.com/DesDevCharan/todo-tracker/blob/master/Charan%20Neat%20Resume-converted.pdf" title="Resume">
                My Resume
            </CTA>

            <CTA type="secondary" inline external to="https://blog.campvanilla.com" title="CampVanilla" className="chevron">
                Visit Camp Vanilla <span>›</span><br/>
                <sub>Actively Following JS Blog</sub>
            </CTA>
            
            <hr />

            <SocialLinks links={links} />
        </div>
    </div>
);

export default Hero;