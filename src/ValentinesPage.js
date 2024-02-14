import React from 'react';
import { Link } from 'react-router-dom'; 

function ValentinesPage() {
  const images = [
    '/pic0.JPG',
    '/pic1.JPG',
    '/pic2.jpg',
    '/pic3.jpg',
    '/pic4.jpg',
    '/pic5.jpg',
    '/pic6.jpg',
    '/pic7.JPG',
    '/pic8.JPG',
    '/pic10.JPG',
    '/pic11.JPG',
    '/image.jpg'
    // ... more image paths
  ];

  return (
    <div className="App-header">
      <h1 style={{ color: 'pink' }}>HAPPY VALENTINES DAY!!!</h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} className="image-item" />
        ))}
      </div>
      <Link to="/next">
        <button className="yes-button" >Next</button> {/* Next button */}
      </Link>
    </div>
  );
}

export default ValentinesPage;
