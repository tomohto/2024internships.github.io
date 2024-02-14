import React from 'react';
import { Link } from 'react-router-dom';

function NextPage() {
    const images = [
        '/a.jpg',
        '/b.jpg',
        '/c.jpg',
        '/d.jpg',
        '/e.jpg',
        '/f.jpg',
        '/g.jpg',
        '/h.jpg',
        '/i.PNG',
        '/school.jpg',
        '/fivehead.jpg',
        '/catkiss.gif'

        // ... more image paths
      ];

  return (
    <div className="App-header">
      <div className="content-container">
      <div className="image-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} className="image-item" />
        ))}
      </div>
        <div className="text-container">
          <p style={{ color: 'pink' }}>Cassie, my favorite person in the world, words can’t describes how glad I am to have met you. I remember that first lunch we had together at plate last year and how you made me feel so safe and comfortable. I felt like I was talking to someone I had known for years and on top of that you said I looked my Han ji pyeong so my ego was getting STROOOOOKED. You are the kindest, funniest, hard working, passionate, gluten-free, artsy fartsy, most beautiful human being and I’m blessed everyday to have someone like you in my life. I know we had some rough patches at times but genuinely I never felt myself grow this much from someone. I feel more comfortable speaking my minding because of how patient you were with my stupid ass sometimes and knowing that I have someone willing to listen like you is an irreplaceable gift. Through the good and the bad I will always love you. You inspire me to work harder and become better every day. You’re the cherry on top of my days and seeing you makes my heart flutter and shit. You are my world and you deserve the world so here’s some really deep and artistic and metaphorical and professional pictures of you.</p>
          {/* Add more text as needed */}
        </div>
      </div>
      <Link to="/another-page"> {/* Update the path as needed */}
        <button className="round-pink-button">Next</button>
      </Link>
    </div>
  );
}

export default NextPage;
