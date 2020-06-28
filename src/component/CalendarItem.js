import React from "react";
import { chunk, decideColor } from "../util/calendarUtil";

const CalendarItem = (props) => {
  return (
    <div className="calendar-item">
      <div className="calendar-date">
        {props.year}. {props.month + 1}.
      </div>
      <div className="calendar-days">
        <div className="calendar-day">일</div>
        <div className="calendar-day">월</div>
        <div className="calendar-day">화</div>
        <div className="calendar-day">수</div>
        <div className="calendar-day">목</div>
        <div className="calendar-day">금</div>
        <div className="calendar-day">토</div>
      </div>
      <div className="calendar-color-boxes">
        {chunk(props.monthArr).map((week) => (
          <div className="calendar-row">
            {week.map((day) => {
              if (day.date === 0) return <div className="calendar-blank"></div>;
              else
                return (
                  <div
                    className="calendar-color-box"
                    style={{ backgroundColor: decideColor(day.mode) }}
                  ></div>
                );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarItem;
