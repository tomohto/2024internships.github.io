import React from 'react';
import { Link } from 'react-router-dom';

function Last() {
  return (
    <div className="App-header">
      <h1 className="valentine-heading">There is no other option.</h1>
      <div className="content-layout">
        <div className="image-container">
          <img src="/wakeup.png" alt="Descriptive Alt Text" />
        </div>
      </div>
      <Link to="/end"> {/* Update the path as needed */}
        <button className="round-pink-button">Continue</button>
      </Link>
    </div>
  );
}

export default Last;
