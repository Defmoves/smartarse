import React, { useState } from "react";
import Clock from "./clock/";
import Weather from "./weather/";
import Calendar from "./calendar/";
import Cursor from "./cursor/";
import "./app.css";

const App = () => {
  const [sleep, setSleep] = useState(false);
  const sleepClass = sleep ? "sleep" : "";
  return (
    <div className={`App ${sleepClass}`}>
      <div className="smartarse">
        <Clock setSleep={setSleep} />
        <Calendar />
        <Weather />
        <Cursor />
      </div>
    </div>
  );
};

export default App;
