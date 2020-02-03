import React, { Component } from "react";
import Moment from "react-moment";
import "./calendar.css";

import { FaPlaneDeparture, FaPlaneArrival, FaBaby } from "react-icons/fa";

class App extends Component {
  render() {
    return (
      <div className="calendar">
        <div className="calendar-left">
          <FaPlaneDeparture /> Benny in Bologna&nbsp;
          <Moment fromNow>2020-02-07T20:00</Moment>
        </div>
        <div className="calendar-left">
          <FaPlaneArrival /> Benny comes home&nbsp;
          <Moment fromNow>2020-02-10T20:00</Moment>
        </div>
        <div className="calendar-left">
          <FaBaby /> Baby Scan&nbsp;
          <Moment fromNow>2020-02-11T20:00</Moment>
        </div>
        <div className="calendar-left">
          <FaBaby /> The Baby Show&nbsp;
          <Moment fromNow>2020-03-01T09:00</Moment>
        </div>
      </div>
    );
  }
}

export default App;
