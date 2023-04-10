import React, { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import "./calendar.css";

import { RiCake2Line } from "react-icons/ri";

const App = () => {
  const [date, setDate] = useState("?");

  useEffect(() => {
    const ticker = () => {
      const date = formatDistanceToNow(new Date("May 1, 2023"));
      setDate(date);
    };
    setInterval(() => ticker(), 1800000); // every .5 hours
    ticker();
  }, []);

  return (
    <div className="calendar">
      <div className="calendar-center">
        <RiCake2Line />
          Ehan's birthday in {date}!
      </div>
    </div>
  );
};

export default App;
