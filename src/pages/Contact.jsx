import React from 'react';
import Navbar from '../components/Navbar';
import AnimatedButton from '../components/AnimatedButton';
import '../styles/main.css';

const Contact = () => {
  return (
    <div className="page contact-page">
      <Navbar />
      <div className="content">
        <h1>Contact Us</h1>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your message"></textarea>
          </div>
          <AnimatedButton text="Send Message" onClick={(e) => {
            e.preventDefault();
            alert('Message sent!');
          }} />
        </form>
      </div>
    </div>
  );
};

export default Contact;