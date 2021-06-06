import React from "react";
import { formatDistanceToNow } from 'date-fns'
import "./calendar.css"

import { FaClinicMedical } from "react-icons/fa";

const App = () => {
  return (
    <div className="calendar">
      <div className="calendar-center">
        <FaClinicMedical />José Vaccine in&nbsp;
        {formatDistanceToNow(new Date(2021, 8, 14, 12, 0))}</div>
        <div className="calendar-center">
        <FaClinicMedical />Benny Vaccine in&nbsp;
        {formatDistanceToNow(new Date(2021, 8, 12, 12, 0))}</div>
    </div>
  );
};

export default App;
