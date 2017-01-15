import React, { Component } from 'react';
var dateFormat = require('dateformat');
import Moment from 'react-moment';

var TiWeatherShower = require('react-icons/lib/ti/weather-shower');
var MdTerrain = require('react-icons/lib/md/terrain');
var MdWbSunny = require('react-icons/lib/md/wb-sunny');

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
          super(props);
          this.ticker = this.ticker.bind(this)
    }

  componentWillMount(){
    this.ticker()
  }

  ticker(){
    var self = this
    var date = new Date()
    var time = dateFormat(date, "hh:MM");
    var date = dateFormat(date, "dddd, mmmm dS, yyyy");

    this.setState({
      time : time,
      date : date
    })

    setTimeout(() => {
      self.ticker()
    },1000)
  }

  render() {
    var time = (this.state !== null ? this.state.time : 0 )
    var date = (this.state !== null ? this.state.date : 0 )
    return (
      <div className="App">
        <div className="smartarse">
          <h3 className="weather"><TiWeatherShower /></h3>
          <div className='clock'>
            <h1 className="time">{time}</h1>
            <h2 className="date">{date}</h2>
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
