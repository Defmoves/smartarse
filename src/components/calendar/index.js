import React from "react";
import Moment from "react-moment";
import "./calendar.css";

import { FaBaby, FaPlaneArrival } from "react-icons/fa";

const App = () => {
  return (
    <div className="calendar">
      <div className="calendar-left">
        <FaPlaneArrival /> Stinky arrives&nbsp;
        <Moment fromNow>2020-04-02T14:00</Moment>
      </div>
      <div className="calendar-right">
        <FaBaby /> Dinky Due&nbsp;
        <Moment fromNow>2020-05-02T13:00</Moment>
      </div>
    </div>
  );
};

export default App;
