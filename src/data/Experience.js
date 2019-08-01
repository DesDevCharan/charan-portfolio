import flipkart from '../images/logos/deloitte.png';
import hashnode from '../images/logos/cts.png';
import saltside from '../images/logos/infy.jpg';

export default [
    {
        id: 3,
        heading: 'Deloitte LLP',
        subHeadings: ['Frontend Engineer: Dec 2016 to Present'],
        description: `
            <p>
                At Deloitte, I was part of the core team building a<i>Friendly and inclusive Q &amp; A community for coders</i>. My role at Hashnode was that of a<strong>Full Stack Engineer</strong>. Features required me working across the stack, with Angular6+ on the frontend and Java / NodeJS in the backend.
                <br />
                <br />
                Some features that I worked on here are:
            </p>
            <ul>
                <li>
                    Performance improvements to the Post Detail Page.
                    This helped reduce the page load time from 11 seconds to just 4 seconds.
                </li>
                <li>
                Code quality Expert who laid down tslint rules in the project and integrated typescript in the sonarqube plugins.
                </li>
            </ul>
        `,
        companyLink: "https://deloitte.com",
        image: flipkart,
        main: "companyLink"
    },
    {
        id: 2,
        heading: 'Cognizant',
        subHeadings: ['Software Engineer: Aug 2016 to Dec 2016'],
        description: `
            <p>
                At Hashnode, I was part of the core team building a<i>Friendly and inclusive Q &amp; A community for coders</i>. My role at Hashnode was that of a<strong>Full Stack Engineer</strong>. Features required me working across the stack, with ReactJS on the frontend and NodeJS and MongoDB in the backend.
                <br />
                <br />
                Some features that I worked on here are:
            </p>
            <ul>
                <li>
                    Performance improvements to the Post Detail Page. This helped reduce the page load time from 11 seconds to just 4 seconds.
                </li>
                <li>
                    Worked on the rewrite of Hashnode.com to Next.js. Specifically focused on the writing experience on Hashnode.com
                </li>
            </ul>
        `,
        companyLink: "https://cognizant.com",
        image: hashnode,
        main: "companyLink"
    },
    {
        id: 1,
        heading: 'Infosys Limited.',
        subHeadings: ['Web Engineer: Jun 2014 to Aug 2016'],
        description: `
            <p>
                Being part of the web engineering team, I contributed to the web application front-end and server-side web development, built on a Javascript stack <strong>(JAVA &amp; Angular)</strong>.
                <br>
                <br>
                Some features and projects that I worked on here are:
            </p>
            <ul>
                <li>
                    Converting all listing pages to Google AMP pages
                </li>
                <li>
                    The Employer Dashboard. Employers using our sites had a tough time dealing with candidate applications. My team and I built a seamless experience for employers to view potential candidates, filter through the applications and also to shortlist candidates.
                </li>
                <li>
                    Automating the <i>listing fees</i> process for our sales teams
                </li>
                <li>
                    Improvements to the <i>Buy Now</i> feature that made using it a breeze both for end-users and for our internal sales teams.
                </li>
            </ul>
        `,
        image: saltside,
        companyLink: "https://infosys",
        main: "companyLink"
    },
];