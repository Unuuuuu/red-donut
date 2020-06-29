import React, { useMemo } from "react";
import { getLastDateFromYearAndMonth } from "../util/calendarUtil";
import { chunk, decideColor } from "../util/calendarUtil";
import { useMainContext } from "../component/Main";
import { getGroupedTasksByDate } from "../util/taskUtil";

const CalendarItem = (props) => {
  const monthFirstDay = new Date(props.year, props.month, 1).getDay();

  const createAlldays = (v, i) => {
    let date = i - monthFirstDay + 1;
    if (date < 0) date = 0;
    else if (date > getLastDateFromYearAndMonth(props.year, props.month)) date = 0;
    return {
      date: date,
      mode: 0,
    };
  };

  const allDays = Array.from(Array(42), (v, i) => createAlldays(v, i));

  const { tasks } = useMainContext();
  const groupedTasksByDate = useMemo(() => getGroupedTasksByDate(tasks), [tasks]);

  const getDaysByMonth = () => {
    return groupedTasksByDate.filter((v) => new Date(v[0].time).getMonth() === props.month);
  };

  const daysByMonth = getDaysByMonth();

  const getDaysByDate = (daysByMonth) => {
    return daysByMonth.map((days) => {
      const mode = days.reduce((a, c) => a + c.mode, 0);
      return {
        date: new Date(days[0].time).getDate(),
        mode: mode,
      };
    });
  };

  const daysByDate = getDaysByDate(daysByMonth);

  const getAllDaysByTask = (daysByDate) => {
    let arr;
    if (daysByDate.length === 0) return allDays;
    else
      daysByDate.forEach((v) => {
        let idx;
        for (let i = 0; i < allDays.length; i++) {
          if (allDays[i].date === v.date) idx = i;
        }
        if (arr === undefined) arr = [[...allDays].slice(0, idx), v, [...allDays].slice(idx + 1)].flat();
        else arr = [[...arr].slice(0, idx), v, [...arr].slice(idx + 1)].flat();
      });
    return arr;
  };

  const allDaysByTask = getAllDaysByTask(daysByDate);

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
        {chunk(allDaysByTask).map((week) => (
          <div className="calendar-row">
            {week.map((day) => {
              if (day.date === 0) return <div className="calendar-blank"></div>;
              else return <div className="calendar-color-box" style={{ backgroundColor: decideColor(day.mode) }}></div>;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarItem;
