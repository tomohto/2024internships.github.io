import React from 'react';
import { Link } from 'react-router-dom';

function End() {
  const asciiHeart = `
  ILOVEYOUILOVEYOUILOVEYOUILOVEYOUILOVEYOUILOVEYOUILOVEYOU
  ILOVEYOUILO ****** VEYOU ****** ILOVEYOUILOVEYOUILOVEYOU
  ILOVEYOU *********** I *********** LOVEYOUILOVEYOUILOVEY
  OUIUI *************** *************** VEYOUILOVEYOUILOVE
  YOUI ********************************** LOVEYOUILOVEYOUI
  IL ************************************* OVEYOUILOVEYOUI
  L *************I**LOVE**YOU*!************ OVEYOUILOVEYOU
  I *************************************** LOVEYOUILOVEYO
  U *************************************** ILOVEYOUILOVEY
  OU ************************************* ILOVEYOUILOVEYO
  UIL *********************************** OVEYOUILOVEYOUIL
  OVEYO ******************************* ULOVEYOUILOVEYOUIL
  OVEYOUI **************************** LOVEYOUILOVEYOUILOV
  EYOUILOVE *********************** YOUILOVEYOUILOVEYOUILO
  VEYOUILOVEYOU ***************** ILOVEYOUILOVEYOUILOVEYOU
  ILOVEYOUILOVEYO ************* LOVEYOUILOVEYOUILOVEYOUILO
  UILOVEYOUILOVEYOU ********* LOVEYOUILOVEYOUILOVEYOUILOVE
  LOVEYOUILOVEYOUILOV ***** ILOVEYOUILOVEYOUILOVEYOUILOVEY
  EYOUILOVEYOUILOVEYOU *** YOULOVEYOUILOVEYOUILOVEYOUILOVE
  VEYOUILOVEYOUILOVEYOU * VEYOUILOVEYOUILOVEYOUILOVEYOUILO
  OVEYOUILOVEYOUILOVEYOUILOVEYOUILOVEYOUILOVEYOUILOVEYOUIL
  `; // Replace with your ASCII art

  return (
    <div className="App-header">
      <h1 className="valentine-heading">Happy Valentines Day Cassie :)</h1>
      <div className="content-layout">
        <pre className="ascii-art">{asciiHeart}</pre>
        <h1 className="valentine-heading">To many more memories with you</h1>
        <div className="image-container">
          <img src="/wakeup.png" alt="Descriptive Alt Text" />
        </div>
      </div>
    </div>
  );
}

export default End;
