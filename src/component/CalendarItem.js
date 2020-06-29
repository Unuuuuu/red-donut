import React, { useMemo } from "react";
import { getLastDateFromYearAndMonth } from "../util/calendarUtil";
import { chunk, decideColor } from "../util/calendarUtil";
import { useMainContext } from "../component/Main";
import { getGroupedTasksByDate } from "../util/taskUtil";

const CalendarItem = (props) => {
  const [prevMonth, currentMonth, nextMonth] = [new Date().getMonth() - 1, new Date().getMonth(), new Date().getMonth() + 1];
  const [prevYear, currentYear, nextYear] = [
    new Date(new Date().getFullYear(), prevMonth).getFullYear(),
    new Date(new Date().getFullYear(), currentMonth).getFullYear(),
    new Date(new Date().getFullYear(), nextMonth).getFullYear(),
  ];
  const [prevMonthFirstDay, currentMonthFirstDay, nextMonthFirstDay] = [
    new Date(prevYear, prevMonth, 1).getDay(),
    new Date(currentYear, currentMonth, 1).getDay(),
    new Date(nextYear, nextMonth, 1).getDay(),
  ];

  const handleYear = () => {
    if (props.when === "prev") return prevYear;
    else if (props.when === "current") return currentYear;
    else if (props.when === "next") return nextYear;
  };

  const handleMonth = () => {
    if (props.when === "prev") return prevMonth;
    else if (props.when === "current") return currentMonth;
    else if (props.when === "next") return nextMonth;
  };

  const handleAllDays = () => {
    if (props.when === "prev") return prevAllDays;
    else if (props.when === "current") return currentAllDays;
    else if (props.when === "next") return nextAllDays;
  };

  const createAlldays = (v, i) => {
    let monthFirstDay;
    if (props.when === "prev") monthFirstDay = prevMonthFirstDay;
    else if (props.when === "current") monthFirstDay = currentMonthFirstDay;
    else if (props.when === "next") monthFirstDay = nextMonthFirstDay;

    let date = i - monthFirstDay + 1;
    if (date < 0) date = 0;
    else if (date > getLastDateFromYearAndMonth(handleYear(), handleMonth())) date = 0;
    return {
      date: date,
      mode: 0,
    };
  };

  const prevAllDays = Array.from(Array(42), (v, i) => createAlldays(v, i));
  const currentAllDays = Array.from(Array(42), (v, i) => createAlldays(v, i));
  const nextAllDays = Array.from(Array(42), (v, i) => createAlldays(v, i));

  const { tasks } = useMainContext();
  const groupedTasksByDate = useMemo(() => getGroupedTasksByDate(tasks), [tasks]);

  const fnct = () => {
    const month = handleMonth();
    return groupedTasksByDate.filter((v) => new Date(v[0].time).getMonth() === month);
  };

  const daysByMonth = fnct();

  const getDateFromMonth = (daysByMonth) => {
    return daysByMonth.map((days) => {
      const mode = days.reduce((a, c) => a + c.mode, 0);
      return {
        date: new Date(days[0].time).getDate(),
        mode: mode,
      };
    });
  };

  const daysByDate = getDateFromMonth(daysByMonth);

  const replaceAllDaysByTask = (daysByDate) => {
    const allDays = handleAllDays();
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

  const allDaysByTask = replaceAllDaysByTask(daysByDate);
  console.log(allDaysByTask);

  return (
    <div className="calendar-item">
      <div className="calendar-date">
        {handleYear()}. {handleMonth() + 1}.
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
