import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ValentinesPage from './ValentinesPage';
import NextPage from './NextPage'; // Import the new page
import AnotherPage from './AnotherPage'; // Adjust the path if needed
import SecondLast from './SecondLast';
import Last from './Last';
import End from './End';

import './App.css';

function App() {
  return (
    <Router>
      <audio controls autoPlay loop>
        <source src="/drake.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/valentines" element={<ValentinesPage />} />
        <Route path="/next" element={<NextPage />} /> {/* Route for the new page */}
        <Route path="/another-page" element={<AnotherPage />} />
        <Route path="/second-last" element={<SecondLast />} />
        <Route path="/last" element={<Last />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </Router>
  );
}

export default App;
