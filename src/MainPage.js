import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function MainPage() {
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [clickCount, setClickCount] = useState(0);
  const [currentImage, setCurrentImage] = useState('/tombite.jpeg'); // Initial image

  // URL of the image you want to display after 3 "No" clicks
  const newImageURL = '/9iev80spqld31.webp'; // Replace with your image path

  const handleNoClick = () => {
    if (clickCount === 2) { // Check if this is the third click
      setCurrentImage(newImageURL); // Change the image
    }

    const newX = Math.floor(Math.random() * window.innerWidth);
    const newY = Math.floor(Math.random() * window.innerHeight);
    setNoButtonStyle({
      position: 'absolute',
      left: `${newX}px`,
      top: `${newY}px`,
    });

    setClickCount(clickCount + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={currentImage} alt="Special Image" style={{ maxWidth: '100%', maxHeight: '300px' }} />
        <p style={{ color: 'pink', fontSize: '24px' }}>
          Cassie, will you be my valentine?
        </p>
        <div>
          <Link to="/valentines">
            <button className="yes-button">Yes</button>
          </Link>
          <button className="no-button" style={noButtonStyle} onClick={handleNoClick}>
            No
          </button>
        </div>
      </header>
    </div>
  );
}

export default MainPage;
