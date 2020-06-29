import React from "react";
import "./Calendar.css";
import CalendarItem from "./CalendarItem";

const Calendar = () => {
  const [prevMonth, currentMonth, nextMonth] = [new Date().getMonth() - 1, new Date().getMonth(), new Date().getMonth() + 1];
  const [prevYear, currentYear, nextYear] = [
    new Date(new Date().getFullYear(), prevMonth).getFullYear(),
    new Date(new Date().getFullYear(), currentMonth).getFullYear(),
    new Date(new Date().getFullYear(), nextMonth).getFullYear(),
  ];
  return (
    <div className="calendar">
      <CalendarItem year={prevYear} month={prevMonth} />
      <div className="calendar-border"></div>
      <CalendarItem year={currentYear} month={currentMonth} />
      <div className="calendar-border"></div>
      <CalendarItem year={nextYear} month={nextMonth} />
    </div>
  );
};

export default Calendar;
