import React, { useState, useEffect } from "react";
import "./clock.css";
import dateFormat from "dateformat";

const App = () => {
  const [time, setTime] = useState("23:59");
  const ticker = () => {
    let date = new Date();
    let time = dateFormat(date, "HH:MM");

    setTime(time);
  };

  setInterval(() => {
    ticker();
  }, 30000);

  return (
    <div className="clock">
      <h1 className="time">{time}</h1>
    </div>
  );
};

export default App;
