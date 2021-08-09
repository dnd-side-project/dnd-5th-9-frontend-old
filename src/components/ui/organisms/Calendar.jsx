import React, { useState } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <ReactCalendar onChange={setDate} value={date} selectRange={true} />
    </>
  );
};

export default Calendar;
