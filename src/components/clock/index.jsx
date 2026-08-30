import { useState, useEffect } from "react";
import { format } from "date-fns";
import "./clock.css";

const App = ({ setSleep }) => {
  const [time, setTime] = useState("23:59");

  useEffect(() => {
    const ticker = () => {
      const hour = Number(format(new Date(), "HH"));
      setSleep(hour > 0 && hour < 8);
      setTime(format(new Date(), "HH mm"));
    };

    const id = setInterval(ticker, 30000); // every 30 seconds
    ticker();
    return () => clearInterval(id);
  }, [setSleep]);

  return (
    <div className="clock">
      <h1 className="time">{time}</h1>
    </div>
  );
};

export default App;
