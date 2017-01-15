import React, { Component } from 'react';
var dateFormat = require('dateformat');
import Moment from 'react-moment'
import Weather from './Weather'

var TiWeatherShower = require('react-icons/lib/ti/weather-shower');
var MdTerrain = require('react-icons/lib/md/terrain');
var MdWbSunny = require('react-icons/lib/md/wb-sunny');

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
          super(props);
          this.ticker = this.ticker.bind(this)
          this.state = {style : 'day'}
    }

  componentWillMount(){
    this.ticker()
  }

  ticker(){
    let self = this
    let date = new Date()
    let time = dateFormat(date, "HH:MM");
    let timeNumeric = dateFormat(date, "HHMM");
    let day = dateFormat(date, "dddd, mmmm dS, yyyy");
    let style = 'day'

    if (timeNumeric > 700 && timeNumeric < 2100 ){
      style = 'day'
    } else if(timeNumeric >= 1355) {
      style = 'night'
    }

    this.setState({
      time : time,
      day : day,
      style: style
    })

    setTimeout(() => {
      self.ticker()
    },1000)
  }

  render() {
    return (
      <div className="App">
        <div className={'smartarse ' + this.state.style}>
          <Weather />
          <div className='clock'>
            <h1 className="time">{this.state.time}</h1>
            <h2 className="day">{this.state.day}</h2>
          </div>
          <div className='calendar'>
            <h4 className="ski"><MdTerrain /> Ski <Moment fromNow>2017-03-01</Moment></h4>
            <h4 className="india"><MdWbSunny/> India <Moment fromNow>2017-09-01</Moment></h4>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
