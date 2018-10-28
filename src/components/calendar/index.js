import React, { Component } from "react"
import Moment from "react-moment"
import "./calendar.css"

import { FaUtensils, FaGift } from "react-icons/fa"

class App extends Component {
  render() {
    return (
      <div className="calendar">
        <div className="calendar-left">
          <FaUtensils /> B in Bologna <Moment fromNow>2018-11-02</Moment>
        </div>
        <div className="calendar-left">
          <FaGift /> J's Birthday <Moment fromNow>2018-11-23</Moment>
        </div>
      </div>
    )
  }
}

export default App
