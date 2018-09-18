import React, { Component } from "react"
import Moment from "react-moment"
import "./calendar.css"

var Question = require("react-icons/lib/fa/question")
var Heart = require("react-icons/lib/fa/heart")
var Group = require("react-icons/lib/fa/group")

class App extends Component {
  render() {
    return (
      <div className="calendar">
        <div className="calendar-left">
          <Question /> Surprise <Moment fromNow>2018-09-26</Moment>
        </div>
        <div className="calendar-left">
          <Group /> D & Kev <Moment fromNow>2018-10-06</Moment>
        </div>
      </div>
    )
  }
}

export default App
