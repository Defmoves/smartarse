import React, { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import "./calendar.css";

import { RiSendPlaneFill } from "react-icons/ri";

const App = () => {
  const [date, setDate] = useState("?");

  useEffect(() => {
    const ticker = () => {
      const date = formatDistanceToNow(new Date("March 31, 2023"));
      setDate(date);
    };
    setInterval(() => ticker(), 1800000); // every .5 hours
    ticker();
  }, []);

  return (
    <div className="calendar">
      <div className="calendar-center">
        <RiSendPlaneFill />
          Bologna in {date}!
      </div>
    </div>
  );
};

export default App;
