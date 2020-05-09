import React from "react";
import Moment from "react-moment";
import "./calendar.css";

import { FaBaby } from "react-icons/fa";

const App = () => {
  return (
    <div className="calendar">
      <div className="calendar-center">
        <FaBaby />Dinky arrived&nbsp;
        <Moment fromNow>2020-05-04T10:40</Moment>!
      </div>
    </div>
  );
};

export default App;
