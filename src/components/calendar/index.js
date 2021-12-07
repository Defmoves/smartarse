import React, { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import "./calendar.css";

import { FaTree } from "react-icons/fa";

const App = () => {
  const [date, setDate] = useState("?");

  useEffect(() => {
    const ticker = () => {
      const date = formatDistanceToNow(new Date("December 25, 2021"));
      setDate(date);
    };
    setInterval(() => ticker(), 1800000); // every .5 hours
    ticker();
  }, []);

  return (
    <div className="calendar">
      <div className="calendar-center">
        <FaTree />
        Christmas in in&nbsp;
        {date}!
      </div>
    </div>
  );
};

export default App;
