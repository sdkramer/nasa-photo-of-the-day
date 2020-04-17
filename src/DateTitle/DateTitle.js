import React, { useState, useEffect } from "react";

const DateTitle = ({apod}) => {

  return (
    <div>
      <h2>{apod && apod.date}: {apod && apod.title}</h2>
    </div>
  )
}

export default DateTitle;