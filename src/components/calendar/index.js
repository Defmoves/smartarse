import React, { Component } from "react";
import Moment from "react-moment";
import "./calendar.css";

import { FaGift, FaPlaneDeparture, FaGlassCheers } from "react-icons/fa";

class App extends Component {
  render() {
    return (
      <div className="calendar">
        <div className="calendar-left">
          <FaPlaneDeparture /> Benny flies to Bologna&nbsp;
          <Moment fromNow>2019-12-21T20:00</Moment>
        </div>
        <div className="calendar-right">
          <FaGift /> Christmas Day&nbsp;
          <Moment fromNow>2019-12-25T19:00</Moment>
        </div>
        <div className="calendar-left">
          <FaPlaneDeparture /> José flies to Bologna&nbsp;
          <Moment fromNow>2019-12-28T17:00</Moment>
        </div>
        <div className="calendar-right">
          <FaGlassCheers />
          New Years Day &nbsp;
          <Moment fromNow>2020-01-01T00:00</Moment>
        </div>
      </div>
    );
  }
}

export default App;
