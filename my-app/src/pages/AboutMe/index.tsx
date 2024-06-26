import React from 'react';
import { Navbar } from '../../components';
import { AboutMeDescriptionBar } from './AboutMe.styles';
import { Background } from '../../common';

const whyAppDescription = `
  Hi my name is Jim Jiracek and I have a passion for entertainment and learning. 
  The entertainment passion came from my grandma, who introduced me to Lord of the Rings while babysitting my cousins and I.
  She would show us new fantasy books, like Harry Potter and the Inheritance series, which only grew my passion.
  She introduced me to Star Wars right after LOTR and I officially became a nerd then.
  I started this app as a way to grow on my react development skills and to track the content I watch or read.
  I am a software engineer whose primary language now is Typescript and primary framework is React.
  I have a passion for Fantasy, Science Fiction, and Comedy (guilty of being a Rom Com fan).
`;
const featureSoftwareDescription = `
  This is a React application with a typescript base. 
  I have become a fan of styled-components recently and like the flexibility of them.
  I just added in a Harness feature flag system to gain control of feature flag powers and to prep for a client.
  Like most developers who don't have a private design team, I used bootstrap to provide some simplicity to the app.
  One of my favorite discoveries was react-multi-carousel, which is used on the home page for carouseling my movie posters.
  Check it out!
  Future tech advances will include unit test coverage, full pipeline integration, and cypress additions
`;

const AboutMe = () => {
  return (
    <div data-testid='about-me' style={{ height: '91vh'}}>
      <Navbar />

      <Background data-testid='background' style={{ height: '100%'}}>
        <h1 data-testid="about-me-header" style={{ textAlign: 'center'}}>About Me</h1>
        <AboutMeDescriptionBar>
          <div>
            <h2>What is this App?</h2>
            <p>{whyAppDescription}</p>
          </div>
          <div>
            <h2>Featured Software</h2>
            <p>{featureSoftwareDescription}</p>
          </div>
          <div>
            <h2>About me</h2>
            <p>Work History:</p>
            <p>Worked for 3 fortune 100 companies</p>
            <p>Consultant at Slalom LLC.</p>

            <p>Fun Facts:</p>
            <ul>
              <li>Software Engineer</li>
              <li>Health and Fitness</li>
              <li>Beer Enthusiast</li>
              <li>Chicago sports fan</li>
              <li>Iowa State University Alumnus</li>
              <li>Iowa Gamma Phi Delta Theta Alumnus</li>
              <br />
            </ul>
          </div>
        </AboutMeDescriptionBar>

        <div>
          TODO: add social media and linked in
        </div>
      </Background>
    </div>
  );
};

export default AboutMe;
