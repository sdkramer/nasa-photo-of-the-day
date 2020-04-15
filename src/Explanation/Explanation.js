import React, { useState, useEffect } from "react";
import "./Explanation.css"

const Explanation = ({ apod }) => {
  return (
    <p className='explanationText'>{apod && apod.explanation}</p>
  )
  
};

export default Explanation;
