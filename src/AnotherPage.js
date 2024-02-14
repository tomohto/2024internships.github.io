import React from 'react';
import { Link } from 'react-router-dom';

function AnotherPage() {
  return (
    <div className="App-header">
      <div className="content-layout">
        <div className="text-content">
          <h1>The little things about you!</h1>
          <ul className="bullet-points">
            <li>When you do your lil foot shuffle dance</li>
            <li>When you sing because you have a beautiful voice</li>
            <li>When you go *hmph* and look at me funny</li>
            <li>When you wrap your arm around mine</li>
            <li>When you tell me you miss me</li>
            <li>When you do skincare on me like a labrat</li>
            <li>When Every time we hugged or cuddled</li>
            <li>When you say "your mom" jokes</li>
            <li>When you tickle me but then say "wait no seriously" and actually stop tickling me and we share a hug so it feels like fresh rain after a summer drought in the desert</li>
            {/* Add more bullet points as needed */}
          </ul>
        </div>
        <div className="image-container">
          <img src="/tomhearteyes.gif" alt="Descriptive Alt Text" />
        </div>
      </div>
      <Link to="/second-last"> {/* Update the path as needed */}
        <button className="round-pink-button">Next</button>
      </Link>
    </div>
  );
}

export default AnotherPage;
