import React, { useState, useEffect } from "react";
import "./clock.css";
import dateFormat from "dateformat";

const App = () => {
  const [time, setTime] = useState("23:59");
  const ticker = () => {
    let date = new Date();
    let time = dateFormat(date, "HH:MM");

    setTime(time);

    setTimeout(() => {
      ticker();
    }, 1000);
  };

  useEffect(() => {
    ticker();
  }, [ticker]);

  return (
    <div className="clock">
      <h1 className="time">{time}</h1>
    </div>
  );
};

export default App;
