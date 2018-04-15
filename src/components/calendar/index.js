import React, { Component } from 'react';
import Moment from 'react-moment'
import moment from "moment"
import tz from "moment-timezone"
import './calendar.css';

var dateFormat = require('dateformat');
var Question = require('react-icons/lib/fa/question');
var Chain = require('react-icons/lib/fa/chain');

class App extends Component {

  render() {
    return (
      <div className='calendar'>
        <div className="calendar-left"><Question /> Benny's Birthday <Moment fromNow>2018-05-01</Moment></div>      
        <div className="calendar-right"><Chain/> Bernado Wedding <Moment fromNow>2018-07-14</Moment></div>
      </div>
    );
  }
}

export default App;
