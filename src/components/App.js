import React, { Component } from "react";
import Weather from "./weather/";
import Calendar from "./calendar/";
import "./App.css";
import dateFormat from "dateformat";

class App extends Component {
  constructor(props) {
    super(props);
    this.ticker = this.ticker.bind(this);
    this.state = { style: "day" };
  }

  componentWillMount() {
    this.ticker();
  }

  ticker() {
    let self = this;
    let date = new Date();
    let time = dateFormat(date, "HH:MM");
    let timeNumeric = dateFormat(date, "HHMM");
    let day = dateFormat(date, "dS mmmm");
    let style = "day";

    if (timeNumeric > 700 && timeNumeric < 2300) {
      style = "day";
    } else {
      style = "night";
    }

    this.setState({
      time: time,
      day: day,
      style: style
    });

    setTimeout(() => {
      self.ticker();
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <div className={"smartarse " + this.state.style}>
          <Weather />
          <div className="clock">
            <h1 className="time">{this.state.time}</h1>
          </div>
          <Calendar />
        </div>
      </div>
    );
  }
}

export default App;
