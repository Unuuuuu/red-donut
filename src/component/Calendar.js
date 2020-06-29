import React from "react";
import "./Calendar.css";
import CalendarItem from "./CalendarItem";

const Calendar = () => {
  return (
    <div className="calendar">
      <CalendarItem when="prev" />
      <div className="calendar-border"></div>
      <CalendarItem when="current" />
      <div className="calendar-border"></div>
      <CalendarItem when="next" />
    </div>
  );
};

export default Calendar;
