import React from "react";
import { formatDistanceToNow } from 'date-fns'
import "./calendar.css"

import { FaBaby } from "react-icons/fa";

const App = () => {
  return (
    <div className="calendar">
      <div className="calendar-center">
        <FaBaby />Ethan arrived&nbsp;
        {formatDistanceToNow(new Date(2020, 4, 4, 10, 40))} ago</div>
    </div>
  );
};

export default App;
