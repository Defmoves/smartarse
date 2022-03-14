import React, { useState, useEffect } from "react";
import "./clock.css";
import dateFormat from "dateformat";

const App = ({ setSleep }) => {
  const [time, setTime] = useState("23:59");

  useEffect(() => {
    const ticker = () => {
      const date = new Date();
      const hour = Number(dateFormat(date, "HH"));
      if (hour > 0 && hour < 8) {
        setSleep(true);
      } else {
        setSleep(false);
      }
      const time = dateFormat(date, "HH MM");
      setTime(time);
    };

    setInterval(() => ticker(), 30000); // every 30 seconds
    ticker();
  }, []);

  return (
    <div className="clock">
      <h1 className="time">{time}</h1>
    </div>
  );
};

export default App;
