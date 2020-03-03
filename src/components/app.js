import React from "react";
import Clock from "./clock/";
import Weather from "./weather/";
import Calendar from "./calendar/";
import "./app.css";

const App = () => {
  return (
    <div className="App">
      <div className={"smartarse "}>
        <Weather />
        <Clock />
        <Calendar />
      </div>
    </div>
  );
};

export default App;
