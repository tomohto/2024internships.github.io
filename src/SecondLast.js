import React from 'react';
import { Link } from 'react-router-dom';

function SecondLast() {
  return (
    <div className="App-header">
      <h1 className="valentine-heading">Why you should be my valentine</h1>
      <div className="content-layout">
        <div className="image-container">
          <img src="/tomV.gif" alt="Descriptive Alt Text" />
        </div>
      </div>
      <Link to="/last"> {/* Update the path as needed */}
        <button className="round-pink-button">Why</button>
      </Link>
    </div>
  );
}

export default SecondLast;
