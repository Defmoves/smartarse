import React from "react";
import { formatDistanceToNow } from 'date-fns'
import "./calendar.css"

import { FaWineBottle } from "react-icons/fa";

const App = () => {
  return (
    <div className="calendar">
      <div className="calendar-center">
        <FaWineBottle />Sergio Coming in&nbsp;
        {formatDistanceToNow(new Date("August 7, 2021"))}</div>
    </div>
  );
};

export default App;
