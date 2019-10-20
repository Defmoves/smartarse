import React, { Component } from "react";
import Moment from "react-moment";
import "./calendar.css";

import { FaUmbrellaBeach, FaFeatherAlt, FaGift } from "react-icons/fa";

class App extends Component {
  render() {
    return (
      <div className="calendar">
        <div className="calendar-left">
          <FaFeatherAlt /> Neil Gaiman&nbsp;
          <Moment fromNow>2019-11-14T19:00</Moment>
        </div>
        <div className="calendar-right">
          <FaUmbrellaBeach /> Holiday begins&nbsp;
          <Moment fromNow>2019-11-15T17:00</Moment>
        </div>
        <div className="calendar-left">
          <FaGift />
          José's birthday&nbsp;
          <Moment fromNow>2019-11-23T00:00</Moment>
        </div>
        <div className="calendar-right">
        <FaGift />
          Cat's birthday&nbsp;
          <Moment fromNow>2019-12-08T00:00</Moment>
        </div>
      </div>
    );
  }
}

export default App;
