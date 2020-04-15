import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import TitleBar from "./TitleBar/TitleBar";
import DateTitle from "./DateTitle/DateTitle";
import Explanation from "./Explanation/Explanation"

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
      <TitleBar />
      <DateTitle apod = {apod} />
      {apod && <img src={apod.url} alt="Astronomy Picture of the Day"/>}
      <Explanation apod = {apod}/>
    </div>
  );
}

export default App;
