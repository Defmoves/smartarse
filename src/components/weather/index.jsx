import { useCallback, useEffect, useState } from "react";
import { addDays, format } from "date-fns";
import {
  WiDaySunny,
  WiDayThunderstorm,
  WiDayShowers,
  WiSnow,
  WiDayCloudy,
} from "react-icons/wi";
import "./Weather.css";

const API_KEY = import.meta.env.VITE_OWM_KEY;

const App = () => {
  const [days, setDays] = useState([]);
  const [error, setError] = useState(null);

  const createForecast = useCallback((obj, index) => {
    let icon = null;
    let iconClass = "";
    const today = index === 0 ? "today" : "";
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

    return (
      <div key={index} className={"forecast " + today + " " + iconClass}>
        <span className="icon">{icon}</span>
        <span className="day">{format(addDays(new Date(), index), "EEE")}</span> -
        <span className="temp">{Math.floor(obj.main.temp_max)} &#x2103;</span>
      </div>
    );
  }, []);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        if (!API_KEY) throw new Error("Weather key missing (VITE_OWM_KEY)");
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=${API_KEY}`
        );
        if (!res.ok) throw new Error(`OpenWeather API error ${res.status}`);
        const data = await res.json();
        if (cancelled) return;
        setDays(data.list.slice(0, 6).map((entry, index) => createForecast(entry, index)));
        setError(null);
      } catch (err) {
        if (!cancelled) setError(err.message);
      }
    };

    load();
    const id = setInterval(load, 3600000); // once an hour
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [createForecast]);

  return (
    <div className="weather">
      {error ? <div className="forecast">{error}</div> : days}
    </div>
  );
};

export default App;
