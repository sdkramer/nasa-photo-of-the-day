import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import TitleBar from "./TitleBar/TitleBar";
import DateTitle from "./DateTitle/DateTitle";
import Explanation from "./Explanation/Explanation";
import Container from "./Container";
import { Alert } from 'reactstrap';

function App() {
  const [apod, setApod] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=cisx5PzbrdKL666SSHXgmfFiU5KwpBqGyz3vgra8"
      )
      .then((res) => {
        console.log(res.data);
        setApod(res.data);
      })
      .catch((err) => {
        // debugger
      });
  }, []);

  return (
    <div className="App">
      <Container>
        <TitleBar />
        <DateTitle apod={apod} />
        {apod && <img src={apod.url} alt="Astronomy Picture of the Day" />}
        <Explanation apod={apod} />
        <Alert color="primary">
        This is a primary alert — check it out!
      </Alert>
      </Container>
    </div>
  );
}

export default App;
