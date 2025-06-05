import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import AnimatedButton from '../components/AnimatedButton';
import '../styles/main.css';
import weddingsImg from '../images/weddings.jpg';
import birthdaysImg from '../images/birthdays.jpg';
import houseWarmingImg from '../images/house warming.jpg';


const Home = () => {
  return (
    <div className="page home-page">
      <Navbar />

      <div className="hero">
        <h1>Welcome to Melissa Event Services</h1>
        <p>Bringing Your Celebrations to Life!</p>
        <AnimatedButton 
          text="View Our Work" 
          targetId="card-container" 
        />
      </div>

      <div className="spacebelow">
        <p className="centered-paragraph"> At Melissa Event Services, we specialize in creating unforgettable experiences for every occasion. 
            Whether you’re planning a corporate conference, a private celebration, or a large-scale public event, 
            our dedicated team is here to handle every detail with precision and creativity. We offer a full range 
            of event management solutions—from initial concept and venue selection to logistics, design, and flawless execution.
            Our services are tailored to meet your unique needs, ensuring each event is memorable, seamless, and perfectly aligned with your vision
        </p>
      </div>

      <div className="card-container">
      <Card
      title="Weddings"
      description="Your wedding planning services." // Add description as well
      imageUrl={weddingsImg}
      />
      <Card
      title="Birthdays"
      description="Birthday party planning."
      imageUrl={birthdaysImg}
      />
      <Card
      title="Housewarmings"
      description="Housewarming event services."
      imageUrl={houseWarmingImg}
      />
      </div>
    </div>
  );
};

export default Home;