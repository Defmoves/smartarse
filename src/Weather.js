import React, { Component } from 'react'
import weather from 'openweather-apis'
import moment from "moment"
import tz from "moment-timezone"
var dateFormat = require('dateformat')
var TiWeatherStormy = require('react-icons/lib/ti/weather-stormy')
var TiWeatherShower = require('react-icons/lib/ti/weather-shower')
var TiWeatherSnow = require('react-icons/lib/ti/weather-snow')
var TiWeatherSunny = require('react-icons/lib/ti/weather-sunny')
var TiWeatherCloudy = require('react-icons/lib/ti/weather-cloudy')

import './Weather.css';

class App extends Component {

  constructor(props){
    super(props)
    weather.setLang('en')
    weather.setCity('London,GB')
    weather.setAPPID('02d71a10fa94fbcff9086087d8d9297e')
    this.state = {
      day0: <div/>,
      day1: <div/>,
      day2: <div/>,
      day3: <div/>,
      day4: <div/>,
      day5: <div/>
    }
  }

  componentWillMount(){
    this.getWeather()
  }

  getWeather(){
    let self = this

    let mo = new moment()
    let day0 = mo.format('ddd')
    let day1 = mo.add(1,'days').format('ddd')
    let day2 = mo.add(1,'days').format('ddd')
    let day3 = mo.add(1,'days').format('ddd')
    let day4 = mo.add(1,'days').format('ddd')
    let day5 = mo.add(1,'days').format('ddd')

    weather.getWeatherForecastForDays(6, function(err, obj){
      self.setState({
        day0: self.createForecast(obj.list[0], day0, 0),
        day1: self.createForecast(obj.list[1], day1, 1),
        day2: self.createForecast(obj.list[2], day2, 2),
        day3: self.createForecast(obj.list[3], day3, 3),
        day4: self.createForecast(obj.list[4], day4, 4),
        day5: self.createForecast(obj.list[5], day5, 5)
      })
    })

    setTimeout(() => {
      self.getWeather()
    },3600000) // Once an Hour
  }

  createForecast(obj, day, index){
    var icon = {}
    var iconClass = ''
    let today = index === 0 ? 'today' : ''

    switch(obj.weather[0].main){
      case 'Thunderstorm':
        icon = <TiWeatherStormy/>
        break
      case 'Rain':
      case 'Drizzle':
        icon = <TiWeatherShower/>
        break
      case 'Snow':
        icon = <TiWeatherSnow/>
        break
      case 'Clear':
        icon = <TiWeatherSunny/>
        iconClass  = 'sunny'
        break
      case 'Clouds':
        icon = <TiWeatherCloudy/>
        iconClass  = 'cloudy'
        break
    }

    return <div className={today +  ' forecast'}>
            <p className='day'>{day}</p>
            <span className={iconClass}>{icon}</span>
            <p>{Math.floor(obj.temp.max)} &#x2103;</p>
          </div>
  }

  render() {
    return (
      <div className="Weather">
        {this.state.day0}
        {this.state.day1}
        {this.state.day2}
        {this.state.day3}
        {this.state.day4}
        {this.state.day5}
      </div>
    );
  }
}

export default App;
