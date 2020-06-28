import React, { useMemo } from "react";
import "./Calendar.css";
import CalendarItem from "./CalendarItem";
import { useMainContext } from "../component/Main";
import { getGroupedTasksByDate } from "../util/taskUtil";

const Calendar = () => {
  const { tasks } = useMainContext();

  const groupedTasksByDate = useMemo(() => getGroupedTasksByDate(tasks), [
    tasks,
  ]);

  const prevMonth = new Date().getMonth() - 1;
  const currentMonth = new Date().getMonth();
  const nextMonth = new Date().getMonth() + 1;
  const prevYear = new Date(new Date().getFullYear(), prevMonth).getFullYear();
  const currentYear = new Date(
    new Date().getFullYear(),
    currentMonth
  ).getFullYear();
  const nextYear = new Date(new Date().getFullYear(), nextMonth).getFullYear();

  // const prevMonthFirstDate = new Date(prevYear, prevMonth, 1).getDate();
  const prevMonthLastDate = new Date(prevYear, prevMonth + 1, 0).getDate();
  const prevMonthFirstDay = new Date(prevYear, prevMonth, 1).getDay();
  const prevMonthLastDay = new Date(prevYear, prevMonth + 1, 0).getDay();
  const prevAllDays = [];

  // const currentMonthFirstDate = new Date(
  //   currentYear,
  //   currentMonth,
  //   1
  // ).getDate();
  const currentMonthLastDate = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();
  const currentMonthFirstDay = new Date(currentYear, currentMonth, 1).getDay();
  const currentMonthLastDay = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDay();
  const currentAllDays = [];

  // const nextMonthFirstDate = new Date(nextYear, nextMonth, 1).getDate();
  const nextMonthLastDate = new Date(nextYear, nextMonth + 1, 0).getDate();
  const nextMonthFirstDay = new Date(nextYear, nextMonth, 1).getDay();
  const nextMonthLastDay = new Date(nextYear, nextMonth + 1, 0).getDay();
  const nextAllDays = [];

  for (let i = 0; i < prevMonthLastDate; i++) {
    prevAllDays.push({ date: i + 1, mode: 0 });
  }
  for (let i = 0; i < currentMonthLastDate; i++) {
    currentAllDays.push({ date: i + 1, mode: 0 });
  }
  for (let i = 0; i < nextMonthLastDate; i++) {
    nextAllDays.push({ date: i + 1, mode: 0 });
  }

  if (prevMonthLastDay === 0)
    prevAllDays.splice(
      prevMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (prevMonthLastDay === 1)
    prevAllDays.splice(
      prevMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (prevMonthLastDay === 2)
    prevAllDays.splice(
      prevMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (prevMonthLastDay === 3)
    prevAllDays.splice(
      prevMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (prevMonthLastDay === 4)
    prevAllDays.splice(
      prevMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (prevMonthLastDay === 5)
    prevAllDays.splice(prevMonthLastDate, 0, { date: 0, mode: 0 });

  if (prevMonthFirstDay === 1) prevAllDays.splice(0, 0, { date: 0, mode: 0 });
  else if (prevMonthFirstDay === 2)
    prevAllDays.splice(0, 0, { date: 0, mode: 0 }, { date: 0, mode: 0 });
  else if (prevMonthFirstDay === 3)
    prevAllDays.splice(
      0,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (prevMonthFirstDay === 4)
    prevAllDays.splice(
      0,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (prevMonthFirstDay === 5)
    prevAllDays.splice(
      0,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (prevMonthFirstDay === 6)
    prevAllDays.splice(
      0,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );

  if (currentMonthLastDay === 0)
    currentAllDays.splice(
      currentMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (currentMonthLastDay === 1)
    currentAllDays.splice(
      currentMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (currentMonthLastDay === 2)
    currentAllDays.splice(
      currentMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (currentMonthLastDay === 3)
    currentAllDays.splice(
      currentMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (currentMonthLastDay === 4)
    currentAllDays.splice(
      currentMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (currentMonthLastDay === 5)
    currentAllDays.splice(currentMonthLastDate, 0, { date: 0, mode: 0 });

  if (currentMonthFirstDay === 1)
    currentAllDays.splice(0, 0, { date: 0, mode: 0 });
  else if (currentMonthFirstDay === 2)
    currentAllDays.splice(0, 0, { date: 0, mode: 0 }, { date: 0, mode: 0 });
  else if (currentMonthFirstDay === 3)
    currentAllDays.splice(
      0,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (currentMonthFirstDay === 4)
    currentAllDays.splice(
      0,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (currentMonthFirstDay === 5)
    currentAllDays.splice(
      0,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (currentMonthFirstDay === 6)
    currentAllDays.splice(
      0,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );

  if (nextMonthLastDay === 0)
    nextAllDays.splice(
      nextMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (nextMonthLastDay === 1)
    nextAllDays.splice(
      nextMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (nextMonthLastDay === 2)
    nextAllDays.splice(
      nextMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (nextMonthLastDay === 3)
    nextAllDays.splice(
      nextMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (nextMonthLastDay === 4)
    nextAllDays.splice(
      nextMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (nextMonthLastDay === 5)
    nextAllDays.splice(nextMonthLastDate, 0, { date: 0, mode: 0 });

  if (nextMonthFirstDay === 1) nextAllDays.splice(0, 0, { date: 0, mode: 0 });
  else if (nextMonthFirstDay === 2)
    nextAllDays.splice(0, 0, { date: 0, mode: 0 }, { date: 0, mode: 0 });
  else if (nextMonthFirstDay === 3)
    nextAllDays.splice(
      0,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (nextMonthFirstDay === 4)
    nextAllDays.splice(
      0,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (nextMonthFirstDay === 5)
    nextAllDays.splice(
      0,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (nextMonthFirstDay === 6)
    nextAllDays.splice(
      0,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );

  const prevDateByDate = [];
  const currentDaysByDate = [];

  const prevDaysByMonth = useMemo(() => {
    return groupedTasksByDate.filter(
      (v) => new Date(v[0].time).getMonth() === prevMonth
    );
  }, [groupedTasksByDate, prevMonth]);
  const currentDaysByMonth = useMemo(
    () =>
      groupedTasksByDate.filter(
        (v) => new Date(v[0].time).getMonth() === currentMonth
      ),
    [groupedTasksByDate, currentMonth]
  );

  prevDaysByMonth.forEach((v) => {
    const mode = v.reduce((a, c) => a + c.mode, 0);
    prevDateByDate.push({
      date: new Date(v[0].time).getDate(),
      mode: mode,
    });
  });
  currentDaysByMonth.forEach((v) => {
    const mode = v.reduce((a, c) => a + c.mode, 0);
    currentDaysByDate.push({
      date: new Date(v[0].time).getDate(),
      mode: mode,
    });
  });

  prevDateByDate.forEach((v) => {
    let idx;
    for (let i = 0; i < prevAllDays.length; i++) {
      if (prevAllDays[i].date === v.date) {
        idx = i;
      }
    }
    prevAllDays.splice(idx, 1, v);
  });
  currentDaysByDate.forEach((v) => {
    let idx;
    for (let i = 0; i < currentAllDays.length; i++) {
      if (currentAllDays[i].date === v.date) {
        idx = i;
      }
    }
    currentAllDays.splice(idx, 1, v);
  });

  return (
    <div className="calendar">
      <CalendarItem year={prevYear} month={prevMonth} monthArr={prevAllDays} />
      <div className="calendar-border"></div>
      <CalendarItem
        year={currentYear}
        month={currentMonth}
        monthArr={currentAllDays}
      />
      <div className="calendar-border"></div>
      <CalendarItem year={nextYear} month={nextMonth} monthArr={nextAllDays} />
    </div>
  );
};

export default Calendar;
