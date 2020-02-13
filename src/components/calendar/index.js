import React, { Component } from "react";
import Moment from "react-moment";
import "./calendar.css";

import { FaBaby, FaSchool } from "react-icons/fa";

class App extends Component {
  render() {
    return (
      <div className="calendar">
        <div className="calendar-left">
          <FaSchool /> NCT Begins&nbsp;
          <Moment fromNow>2020-02-27T19:00</Moment>
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
