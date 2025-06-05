import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/main.css';

const About = () => {
  return (
    <div className="page">
      <Navbar />
      <div className="content">
        <h1>About Us</h1>
        <p>We are a creative team passionate about building amazing experiences.</p>
      </div>
    </div>
  );
};

export default About;