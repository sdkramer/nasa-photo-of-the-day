import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'

function App() {
  const [apod, setApod] = useState(null)

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=cisx5PzbrdKL666SSHXgmfFiU5KwpBqGyz3vgra8')
    .then(res => {
      console.log(res.data)
      setApod(res.data)
    })
  .catch(err => {
    // debugger
  })
  }, [])
 


  return (
    <div className="App">
      <h1>NASA Image of the Day</h1>
  <h2>{apod && apod.date}: {apod && apod.title}</h2>
      {apod && <img src={apod.url} alt="Astronomy Picture of the Day"/>}
      <p>
      {apod && apod.explanation}
      </p>
    </div>
  );
}

export default App;
