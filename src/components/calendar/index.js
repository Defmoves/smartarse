import React from "react";
import { formatDistanceToNow } from 'date-fns'
import "./calendar.css"

import { FaClinicMedical } from "react-icons/fa";

const App = () => {
  return (
    <div className="calendar">
      <div className="calendar-center">
        <FaClinicMedical />José Vaccine in&nbsp;
        {formatDistanceToNow(new Date(2021, 6, 24, 12, 0))}</div>
        <div className="calendar-center">
        <FaClinicMedical />Benny Vaccine in&nbsp;
        {formatDistanceToNow(new Date(2021, 6, 25, 12, 0))}</div>
    </div>
  );
};

export default App;
