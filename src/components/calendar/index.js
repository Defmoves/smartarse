import React, { Component } from "react";
import Moment from "react-moment";
import "./calendar.css";

import { FaPlaneDeparture, FaBirthdayCake } from "react-icons/fa";

class App extends Component {
  render() {
    return (
      <div className="calendar">
        <div className="calendar-left">
          <FaBirthdayCake /> Stinky Bday <Moment fromNow>2019-09-16</Moment>
        </div>
        <div className="calendar-right">
          <FaPlaneDeparture /> Asia <Moment fromNow>2019-11-19</Moment>
        </div>
      </div>
    );
  }
}

export default App;
