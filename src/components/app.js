import React from "react";
import Clock from "./clock/";
import Weather from "./weather/";
import Calendar from "./calendar/";
import Cursor from "./cursor/";
import "./app.css";

const App = () => {
  return (
    <div className="App">
      <div className={"smartarse "}>
        <Clock />
        <Calendar />
        <Weather />
        <Cursor />
      </div>
    </div>
  );
};

export default App;
