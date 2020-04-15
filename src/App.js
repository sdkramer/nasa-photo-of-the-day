import React, { useState } from "react";
import "./App.css";
import axios from 'axios'

function App() {
  const [apod, setApod] = useState(null)


  
  return (
    <div className="App">
      <h1>NASA Image of the Day</h1>
      <img src={apod} alt="Astronomy Picture of the Day"/>
      <p>
      One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications.
      </p>
    </div>
  );
}

export default App;
