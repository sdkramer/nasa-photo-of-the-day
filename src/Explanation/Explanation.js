import React, { useState, useEffect } from "react";
// import "./Explanation.css";
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const Explanation = ({ apod }) => {
  return (
    // <p className='explanationText'>{apod && apod.explanation}</p>
    <div className="p-3 my-2 rounded" style={{ background: 'black' }}>
    <Toast>
      <ToastHeader>
      {apod && apod.title}
      </ToastHeader>
      <ToastBody>
      {apod && apod.explanation}
      </ToastBody>
    </Toast>
  </div>
  )
  
};

export default Explanation;
