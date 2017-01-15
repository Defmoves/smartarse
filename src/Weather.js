import React, { Component } from 'react'
import weather from 'openweather-apis'
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
      day4: <div/>,
      day5: <div/>
    }
  }

  createForecast(obj){
    var icon = {}

    console.log(obj)

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
        break
      case 'Clouds':
        icon = <TiWeatherCloudy/>
        break
    }

    return <div className='forecast'>
            {icon}
            <p>{Math.floor(obj.temp.max)} &#x2103;</p>
          </div>
  }

  componentWillMount(){
    let that = this

    weather.getWeatherForecastForDays(5, function(err, obj){
      that.setState({
        day0: that.createForecast(obj.list[0]),
        day1: that.createForecast(obj.list[1]),
        day2: that.createForecast(obj.list[2]),
        day3: that.createForecast(obj.list[3]),
        day4: that.createForecast(obj.list[4]),

      })
    })
  }

  render() {
    return (
      <div className="Weather">
        {this.state.day0}
        {this.state.day1}
        {this.state.day2}
        {this.state.day3}
        {this.state.day4}
      </div>
    );
  }
}

export default App;
