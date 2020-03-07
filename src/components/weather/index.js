import React, { useState, useEffect } from "react";
import weather from "openweather-apis";
import moment from "moment";
import "./Weather.css";
import {
  WiDaySunny,
  WiDayThunderstorm,
  WiDayShowers,
  WiSnow,
  WiDayCloudy
} from "react-icons/wi";

const App = () => {
  const [day0, setDay0] = useState();
  const [day1, setDay1] = useState();
  const [day2, setDay2] = useState();
  const [day3, setDay3] = useState();
  const [day4, setDay4] = useState();
  const [day5, setDay5] = useState();

  weather.setLang("en");
  weather.setCity("London");
  weather.setAPPID("02d71a10fa94fbcff9086087d8d9297e");

  const getWeather = () => {
    let mo = new moment();
    let d0 = mo.format("ddd");
    let d1 = mo.add(1, "days").format("ddd");
    let d2 = mo.add(1, "days").format("ddd");
    let d3 = mo.add(1, "days").format("ddd");
    let d4 = mo.add(1, "days").format("ddd");
    let d5 = mo.add(1, "days").format("ddd");

    weather.getWeatherForecastForDays(6, function(err, obj) {
      setDay0(createForecast(obj.list[0], d0, 0));
      setDay1(createForecast(obj.list[1], d1, 1));
      setDay2(createForecast(obj.list[2], d2, 2));
      setDay3(createForecast(obj.list[3], d3, 3));
      setDay4(createForecast(obj.list[4], d4, 4));
      setDay5(createForecast(obj.list[5], d5, 5));
    });
  };

  const createForecast = (obj, day, index) => {
    var icon = {};
    var iconClass = "";
    let today = index === 0 ? "today" : "";
    const id = obj.weather[0].id;

    if (id >= 200 && id < 300) {
      icon = <WiDayThunderstorm />;
      iconClass = "Thunderstorm";
    }

    if (id >= 500 && id < 600) {
      icon = <WiDayShowers />;
      iconClass = "Rain";
    }

    if (id >= 600 && id < 700) {
      icon = <WiSnow />;
      iconClass = "Snow";
    }

    if (id === 800) {
      icon = <WiDaySunny />;
      iconClass = "Clear";
    }

    if (id >= 801 && id < 900) {
      icon = <WiDayCloudy />;
      iconClass = "Clouds";
    }

    setTimeout(() => {
      getWeather();
    }, 3600000); // Once an Hour    

    return (
      <div className={"forecast " + today + " " + iconClass}>
        <div className={"icon "}>{icon}</div>
        <p className="day">{day}</p>
        <p className="temp">{Math.floor(obj.temp.max)} &#x2103;</p>
      </div>
    );
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="weather">
      {day0}
      {day1}
      {day2}
      {day3}
      {day4}
      {day5}
    </div>
  );
};

export default App;
