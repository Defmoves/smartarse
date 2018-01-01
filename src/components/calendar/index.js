import React, { Component } from 'react';
import Moment from 'react-moment'
import moment from "moment"
import tz from "moment-timezone"
import './calendar.css';

var dateFormat = require('dateformat');
var Question = require('react-icons/lib/fa/question');
var MdTerrain = require('react-icons/lib/md/terrain');

class App extends Component {

  render() {
    return (
      <div className='calendar'>
        <div className="calendar-left"><MdTerrain/> Ski <Moment fromNow>2018-02-15</Moment></div>
        <div className="calendar-right"><Question /> Bini Bday <Moment fromNow>2018-05-01</Moment></div>
      </div>
    );
  }
}

export default App;
