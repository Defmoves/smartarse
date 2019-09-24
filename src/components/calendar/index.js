import React, { Component } from "react";
import Moment from "react-moment";
import "./calendar.css";

import {
  FaUmbrellaBeach,
  FaBook,
  FaFeatherAlt,
  FaGlobeEurope
} from "react-icons/fa";

class App extends Component {
  render() {
    return (
      <div className="calendar">
        <div className="calendar-left">
          Uninhabitable <FaGlobeEurope />
          <Moment fromNow>2019-10-02T00:00</Moment>
        </div>
        <div className="calendar-right">
          <FaBook /> Naomi Klein&nbsp;
          <Moment fromNow>2019-10-15T00:00</Moment>
        </div>
        <div className="calendar-left">
          <FaFeatherAlt /> Neil Gaiman&nbsp;
          <Moment fromNow>2019-11-14T00:00</Moment>
        </div>
        <div className="calendar-right">
          <FaUmbrellaBeach /> Holiday begins&nbsp;
          <Moment fromNow>2019-11-15T17:00</Moment>
        </div>
      </div>
    );
  }
}

export default App;
