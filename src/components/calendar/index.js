import React, { Component } from 'react';
import Moment from 'react-moment'
import moment from "moment"
import tz from "moment-timezone"
import './calendar.css';

var dateFormat = require('dateformat');
var MdAcUnit = require('react-icons/lib/md/ac-unit');
var MdTerrain = require('react-icons/lib/md/terrain');

class App extends Component {

  render() {
    return (
      <div className='calendar'>
        <div className="calendar-left"><MdAcUnit /> Christmas <Moment fromNow>2017-12-25</Moment></div>
        <div className="calendar-right"><MdTerrain/> Ski <Moment fromNow>2018-02-15</Moment></div>
      </div>
    );
  }
}

export default App;
