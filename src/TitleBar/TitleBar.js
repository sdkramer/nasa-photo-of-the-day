import React, { useState, useEffect } from "react";
// import "./TitleBar.css";
import styled from 'styled-components'

const Title = styled.h1`
color: red;

`


const TitleBar = () => {

  return (
    <div>
      <Title>NASA Cosmic Image of the Day</Title>
    </div>
  )
}

export default TitleBar;