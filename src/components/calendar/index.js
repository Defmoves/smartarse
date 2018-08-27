import React, { Component } from "react"
import Moment from "react-moment"
import moment from "moment"
import tz from "moment-timezone"
import "./calendar.css"

var dateFormat = require("dateformat")
var Question = require("react-icons/lib/fa/plane")
var Heart = require("react-icons/lib/fa/heart")
var Chain = require("react-icons/lib/fa/chain")

class App extends Component {
  render() {
    return (
      <div className="calendar">
        <div className="calendar-left">
          <Question /> Sardinia <Moment fromNow>2018-09-05</Moment>
        </div>
        <div className="calendar-left">
          <Heart /> Stinky <Moment fromNow>2018-09-12</Moment>
        </div>
      </div>
    )
  }
}

export default App
