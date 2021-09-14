import React, { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import "./calendar.css";

import { FaPaperPlane } from "react-icons/fa";

const App = () => {
  const [date, setDate] = useState("?");
  const ticker = () => {
    const date = formatDistanceToNow(new Date("October 8, 2021"));
    setDate(date);
  };

  setInterval(() => ticker(), 1800000); // every .5 hours

  useEffect(() => ticker(), []);

  return (
    <div className="calendar">
      <div className="calendar-center">
        <FaPaperPlane />
        We're off to Bologna in...&nbsp;
        {date}!
      </div>
    </div>
  );
};

export default App;
