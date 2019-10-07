import React, { Component } from "react";
import Moment from "react-moment";
import "./calendar.css";

import { FaUmbrellaBeach, FaBook, FaFeatherAlt, FaGift } from "react-icons/fa";

class App extends Component {
  render() {
    return (
      <div className="calendar">
        <div className="calendar-left">
          <FaBook /> Naomi Klein&nbsp;
          <Moment fromNow>2019-10-15T20:00</Moment>
        </div>
        <div className="calendar-right">
          <FaFeatherAlt /> Neil Gaiman&nbsp;
          <Moment fromNow>2019-11-14T19:00</Moment>
        </div>
        <div className="calendar-left">
          <FaUmbrellaBeach /> Holiday begins&nbsp;
          <Moment fromNow>2019-11-15T17:00</Moment>
        </div>
        <div className="calendar-right">
          <FaGift />
          José's birthday&nbsp;
          <Moment fromNow>2019-11-23T00:00</Moment>
        </div>
      </div>
    );
  }
}

export default App;
