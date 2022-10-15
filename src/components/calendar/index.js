import React, { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import "./calendar.css";

import { FaGifts } from "react-icons/fa";

const App = () => {
  const [date, setDate] = useState("?");

  useEffect(() => {
    const ticker = () => {
      const date = formatDistanceToNow(new Date("December 25, 2022"));
      setDate(date);
    };
    setInterval(() => ticker(), 1800000); // every .5 hours
    ticker();
  }, []);

  return (
    <div className="calendar">
      <div className="calendar-center">
        <FaGifts />
        Counrdown to Santa: &nbsp;
        {date}!
      </div>
    </div>
  );
};

export default App;
