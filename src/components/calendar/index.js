import React, { Component } from "react";
import Moment from "react-moment";
import "./calendar.css";

import { FaBaby } from "react-icons/fa";

class App extends Component {
  render() {
    return (
      <div className="calendar">
        <div className="calendar-left">
          <FaBaby /> Baby Scan&nbsp;
          <Moment fromNow>2020-02-11T20:00</Moment>
        </div>
        <div className="calendar-right">
          <FaBaby /> Meet the Midwife&nbsp;
          <Moment fromNow>2020-02-13T20:00</Moment>
        </div>
        <div className="calendar-left">
          <FaBaby /> Nursery Tour&nbsp;
          <Moment fromNow>2020-02-14T14:30</Moment>
        </div>
        <div className="calendar-right">
          <FaBaby /> The Baby Show&nbsp;
          <Moment fromNow>2020-03-01T09:00</Moment>
        </div>
      </div>
    );
  }
}

export default App;
