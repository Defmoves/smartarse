import React, { Component } from "react";
import Moment from "react-moment";
import "./calendar.css";

import { FaUmbrellaBeach, FaGift } from "react-icons/fa";

class App extends Component {
  render() {
    return (
      <div className="calendar">
        <div className="calendar-left">
          <FaGift /> Stinky Bday <Moment fromNow>2019-09-24</Moment>
        </div>
        <div className="calendar-right">
          <FaUmbrellaBeach /> Asia <Moment fromNow>2019-11-19</Moment>
        </div>
      </div>
    );
  }
}

export default App;
