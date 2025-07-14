import React from 'react';
import { image } from '../data/user';

function About() {
  return (
    <div>
      <h2>About Me</h2>
      <img src={image} alt="Profile" />
      <p>About section content...</p>
    </div>
  );
}

export default About;