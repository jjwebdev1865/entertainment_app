import React from 'react';
import { Navbar } from '../../common/Navbar/Navbar';

const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <h1 data-testid='about-me-header'>About Me</h1>
    </div>
  );
};

export default AboutMe;