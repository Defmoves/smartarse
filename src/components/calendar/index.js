import React, { Component } from "react"
import Moment from "react-moment"
import "./calendar.css"

import { FaUtensils, FaGift } from "react-icons/fa"

class App extends Component {
  render() {
    return (
      <div className="calendar">
        <div className="calendar-left">
          <FaGift /> Surprise <Moment fromNow>2019-07-24</Moment>
        </div>
        <div className="calendar-right">
          <FaGift /> J's Birthday <Moment fromNow>2019-11-23</Moment>
        </div>
      </div>
    )
  }
}

export default App
