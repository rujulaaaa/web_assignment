import React from 'react';
import '../styles/main.css'; // Only need main.css now

const SimpleButton = ({ text, onClick }) => {
  return (
    <button 
      className="simple-button" 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SimpleButton;
