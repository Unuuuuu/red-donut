import React, { useMemo } from "react";
import classNames from "classnames";
import "./Record.css";
import { useMainContext } from "./Main";

const Record = () => {
  const { groupArr } = useMainContext();
  const date = new Date();
  const currentYear = date.getFullYear();

  const prevMonth = date.getMonth() - 1;
  // const prevMonthFirstDate = new Date(currentYear, prevMonth, 1).getDate();
  const prevMonthLastDate = new Date(currentYear, prevMonth + 1, 0).getDate();
  const prevMonthFirstDay = new Date(currentYear, prevMonth, 1).getDay();
  const prevMonthLastDay = new Date(currentYear, prevMonth + 1, 0).getDay();
  const prevMonthArr = [];

  const currentMonth = date.getMonth();
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
  const currentMonthArr = [];

  const nextMonth = date.getMonth() + 1;
  // const nextMonthFirstDate = new Date(currentYear, nextMonth, 1).getDate();
  const nextMonthLastDate = new Date(currentYear, nextMonth + 1, 0).getDate();
  const nextMonthFirstDay = new Date(currentYear, nextMonth, 1).getDay();
  const nextMonthLastDay = new Date(currentYear, nextMonth + 1, 0).getDay();
  const nextMonthArr = [];

  for (let i = 0; i < prevMonthLastDate; i++) {
    prevMonthArr.push({ date: i + 1, mode: 0 });
  }
  for (let i = 0; i < currentMonthLastDate; i++) {
    currentMonthArr.push({ date: i + 1, mode: 0 });
  }
  for (let i = 0; i < nextMonthLastDate; i++) {
    nextMonthArr.push({ date: i + 1, mode: 0 });
  }

  if (prevMonthLastDay === 0)
    prevMonthArr.splice(
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
    prevMonthArr.splice(
      prevMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (prevMonthLastDay === 2)
    prevMonthArr.splice(
      prevMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (prevMonthLastDay === 3)
    prevMonthArr.splice(
      prevMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (prevMonthLastDay === 4)
    prevMonthArr.splice(
      prevMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (prevMonthLastDay === 5)
    prevMonthArr.splice(prevMonthLastDate, 0, { date: 0, mode: 0 });

  if (prevMonthFirstDay === 1) prevMonthArr.splice(0, 0, { date: 0, mode: 0 });
  else if (prevMonthFirstDay === 2)
    prevMonthArr.splice(0, 0, { date: 0, mode: 0 }, { date: 0, mode: 0 });
  else if (prevMonthFirstDay === 3)
    prevMonthArr.splice(
      0,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (prevMonthFirstDay === 4)
    prevMonthArr.splice(
      0,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (prevMonthFirstDay === 5)
    prevMonthArr.splice(
      0,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (prevMonthFirstDay === 6)
    prevMonthArr.splice(
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
    currentMonthArr.splice(
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
    currentMonthArr.splice(
      currentMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (currentMonthLastDay === 2)
    currentMonthArr.splice(
      currentMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (currentMonthLastDay === 3)
    currentMonthArr.splice(
      currentMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (currentMonthLastDay === 4)
    currentMonthArr.splice(
      currentMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (currentMonthLastDay === 5)
    currentMonthArr.splice(currentMonthLastDate, 0, { date: 0, mode: 0 });

  if (currentMonthFirstDay === 1)
    currentMonthArr.splice(0, 0, { date: 0, mode: 0 });
  else if (currentMonthFirstDay === 2)
    currentMonthArr.splice(0, 0, { date: 0, mode: 0 }, { date: 0, mode: 0 });
  else if (currentMonthFirstDay === 3)
    currentMonthArr.splice(
      0,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (currentMonthFirstDay === 4)
    currentMonthArr.splice(
      0,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (currentMonthFirstDay === 5)
    currentMonthArr.splice(
      0,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (currentMonthFirstDay === 6)
    currentMonthArr.splice(
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
    nextMonthArr.splice(
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
    nextMonthArr.splice(
      nextMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (nextMonthLastDay === 2)
    nextMonthArr.splice(
      nextMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (nextMonthLastDay === 3)
    nextMonthArr.splice(
      nextMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (nextMonthLastDay === 4)
    nextMonthArr.splice(
      nextMonthLastDate,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (nextMonthLastDay === 5)
    nextMonthArr.splice(nextMonthLastDate, 0, { date: 0, mode: 0 });

  if (nextMonthFirstDay === 1) nextMonthArr.splice(0, 0, { date: 0, mode: 0 });
  else if (nextMonthFirstDay === 2)
    nextMonthArr.splice(0, 0, { date: 0, mode: 0 }, { date: 0, mode: 0 });
  else if (nextMonthFirstDay === 3)
    nextMonthArr.splice(
      0,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (nextMonthFirstDay === 4)
    nextMonthArr.splice(
      0,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (nextMonthFirstDay === 5)
    nextMonthArr.splice(
      0,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );
  else if (nextMonthFirstDay === 6)
    nextMonthArr.splice(
      0,
      0,
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 },
      { date: 0, mode: 0 }
    );

  const prevMonthTaskArr = useMemo(
    () => groupArr.filter((v) => new Date(v[0].time).getMonth() === prevMonth),
    [groupArr, prevMonth]
  );
  const currentMonthTaskArr = useMemo(
    () =>
      groupArr.filter((v) => new Date(v[0].time).getMonth() === currentMonth),
    [groupArr, currentMonth]
  );

  const prevDateTaskArr = [];
  const currentDateTaskArr = [];

  prevMonthTaskArr.map((v) => {
    const mode = v.reduce((a, c) => a + c.mode, 0);
    prevDateTaskArr.push({
      date: new Date(v[0].time).getDate(),
      mode: mode,
    });
    return null;
  });
  currentMonthTaskArr.map((v) => {
    const mode = v.reduce((a, c) => a + c.mode, 0);
    currentDateTaskArr.push({
      date: new Date(v[0].time).getDate(),
      mode: mode,
    });
    return null;
  });

  prevDateTaskArr.map((v) => {
    let idx;
    for (let i = 0; i < prevMonthArr.length; i++) {
      if (prevMonthArr[i].date === v.date) {
        idx = i;
      }
    }
    prevMonthArr.splice(idx, 1, v);
    return null;
  });
  currentDateTaskArr.map((v) => {
    let idx;
    for (let i = 0; i < currentMonthArr.length; i++) {
      if (currentMonthArr[i].date === v.date) {
        idx = i;
      }
    }
    currentMonthArr.splice(idx, 1, v);
    return null;
  });
  // console.log(groupArr);
  // console.log(prevMonthArr);
  // console.log(currentMonthArr);
  // console.log(nextMonthTaskArr);
  // console.log(currentDateTaskArr);

  return (
    <div className="record-comp">
      <div className="record-container">
        <div className="month-container">
          <div className="month-title">
            {currentYear}. {prevMonth + 1}.
          </div>
          <div className="month-days">
            <div className="day">일</div>
            <div className="day">월</div>
            <div className="day">화</div>
            <div className="day">수</div>
            <div className="day">목</div>
            <div className="day">금</div>
            <div className="day">토</div>
          </div>
          <div className="month-calendar">
            <div className="calendar-row">
              {prevMonthArr.map((v, i) => {
                return (
                  <>
                    {i >= 0 && i <= 6 && (
                      <>
                        {v.date === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div
                            className={classNames(
                              "calendar-date",
                              { "mode-1": v.mode === 1 },
                              { "mode-2": v.mode === 2 },
                              { "mode-3": v.mode === 3 },
                              { "mode-4": v.mode === 4 },
                              { "mode-5": v.mode === 5 },
                              { "mode-6": v.mode === 6 },
                              { "mode-7": v.mode === 7 },
                              { "mode-8": v.mode === 8 },
                              { "mode-9": v.mode === 9 },
                              { "mode-10": v.mode === 10 },
                              { "mode-11": v.mode === 11 },
                              { "mode-12": v.mode === 12 },
                              { "mode-13": v.mode === 13 },
                              { "mode-14": v.mode === 14 },
                              { "mode-15": v.mode >= 15 }
                            )}
                          ></div>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
            <div className="calendar-row">
              {prevMonthArr.map((v, i) => {
                return (
                  <>
                    {i >= 7 && i <= 13 && (
                      <>
                        {v.date === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div
                            className={classNames(
                              "calendar-date",
                              { "mode-1": v.mode === 1 },
                              { "mode-2": v.mode === 2 },
                              { "mode-3": v.mode === 3 },
                              { "mode-4": v.mode === 4 },
                              { "mode-5": v.mode === 5 },
                              { "mode-6": v.mode === 6 },
                              { "mode-7": v.mode === 7 },
                              { "mode-8": v.mode === 8 },
                              { "mode-9": v.mode === 9 },
                              { "mode-10": v.mode === 10 },
                              { "mode-11": v.mode === 11 },
                              { "mode-12": v.mode === 12 },
                              { "mode-13": v.mode === 13 },
                              { "mode-14": v.mode === 14 },
                              { "mode-15": v.mode >= 15 }
                            )}
                          ></div>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
            <div className="calendar-row">
              {prevMonthArr.map((v, i) => {
                return (
                  <>
                    {i >= 14 && i <= 20 && (
                      <>
                        {v.date === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div
                            className={classNames(
                              "calendar-date",
                              { "mode-1": v.mode === 1 },
                              { "mode-2": v.mode === 2 },
                              { "mode-3": v.mode === 3 },
                              { "mode-4": v.mode === 4 },
                              { "mode-5": v.mode === 5 },
                              { "mode-6": v.mode === 6 },
                              { "mode-7": v.mode === 7 },
                              { "mode-8": v.mode === 8 },
                              { "mode-9": v.mode === 9 },
                              { "mode-10": v.mode === 10 },
                              { "mode-11": v.mode === 11 },
                              { "mode-12": v.mode === 12 },
                              { "mode-13": v.mode === 13 },
                              { "mode-14": v.mode === 14 },
                              { "mode-15": v.mode >= 15 }
                            )}
                          ></div>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
            <div className="calendar-row">
              {prevMonthArr.map((v, i) => {
                return (
                  <>
                    {i >= 21 && i <= 27 && (
                      <>
                        {v.date === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div
                            className={classNames(
                              "calendar-date",
                              { "mode-1": v.mode === 1 },
                              { "mode-2": v.mode === 2 },
                              { "mode-3": v.mode === 3 },
                              { "mode-4": v.mode === 4 },
                              { "mode-5": v.mode === 5 },
                              { "mode-6": v.mode === 6 },
                              { "mode-7": v.mode === 7 },
                              { "mode-8": v.mode === 8 },
                              { "mode-9": v.mode === 9 },
                              { "mode-10": v.mode === 10 },
                              { "mode-11": v.mode === 11 },
                              { "mode-12": v.mode === 12 },
                              { "mode-13": v.mode === 13 },
                              { "mode-14": v.mode === 14 },
                              { "mode-15": v.mode >= 15 }
                            )}
                          ></div>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
            <div className="calendar-row">
              {prevMonthArr.map((v, i) => {
                return (
                  <>
                    {i >= 28 && i <= 34 && (
                      <>
                        {v.date === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div
                            className={classNames(
                              "calendar-date",
                              { "mode-1": v.mode === 1 },
                              { "mode-2": v.mode === 2 },
                              { "mode-3": v.mode === 3 },
                              { "mode-4": v.mode === 4 },
                              { "mode-5": v.mode === 5 },
                              { "mode-6": v.mode === 6 },
                              { "mode-7": v.mode === 7 },
                              { "mode-8": v.mode === 8 },
                              { "mode-9": v.mode === 9 },
                              { "mode-10": v.mode === 10 },
                              { "mode-11": v.mode === 11 },
                              { "mode-12": v.mode === 12 },
                              { "mode-13": v.mode === 13 },
                              { "mode-14": v.mode === 14 },
                              { "mode-15": v.mode >= 15 }
                            )}
                          ></div>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
            <div className="calendar-row">
              {prevMonthArr.map((v, i) => {
                return (
                  <>
                    {i >= 35 && i <= 41 && (
                      <>
                        {v.date === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div
                            className={classNames(
                              "calendar-date",
                              { "mode-1": v.mode === 1 },
                              { "mode-2": v.mode === 2 },
                              { "mode-3": v.mode === 3 },
                              { "mode-4": v.mode === 4 },
                              { "mode-5": v.mode === 5 },
                              { "mode-6": v.mode === 6 },
                              { "mode-7": v.mode === 7 },
                              { "mode-8": v.mode === 8 },
                              { "mode-9": v.mode === 9 },
                              { "mode-10": v.mode === 10 },
                              { "mode-11": v.mode === 11 },
                              { "mode-12": v.mode === 12 },
                              { "mode-13": v.mode === 13 },
                              { "mode-14": v.mode === 14 },
                              { "mode-15": v.mode >= 15 }
                            )}
                          ></div>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="border"></div>
        <div className="month-container">
          <div className="month-title">
            {currentYear}. {currentMonth + 1}.
          </div>
          <div className="month-days">
            <div className="day">일</div>
            <div className="day">월</div>
            <div className="day">화</div>
            <div className="day">수</div>
            <div className="day">목</div>
            <div className="day">금</div>
            <div className="day">토</div>
          </div>
          <div className="month-calendar">
            <div className="calendar-row">
              {currentMonthArr.map((v, i) => {
                return (
                  <>
                    {i >= 0 && i <= 6 && (
                      <>
                        {v.date === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div
                            className={classNames(
                              "calendar-date",
                              { "mode-1": v.mode === 1 },
                              { "mode-2": v.mode === 2 },
                              { "mode-3": v.mode === 3 },
                              { "mode-4": v.mode === 4 },
                              { "mode-5": v.mode === 5 },
                              { "mode-6": v.mode === 6 },
                              { "mode-7": v.mode === 7 },
                              { "mode-8": v.mode === 8 },
                              { "mode-9": v.mode === 9 },
                              { "mode-10": v.mode === 10 },
                              { "mode-11": v.mode === 11 },
                              { "mode-12": v.mode === 12 },
                              { "mode-13": v.mode === 13 },
                              { "mode-14": v.mode === 14 },
                              { "mode-15": v.mode >= 15 }
                            )}
                          ></div>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
            <div className="calendar-row">
              {currentMonthArr.map((v, i) => {
                return (
                  <>
                    {i >= 7 && i <= 13 && (
                      <>
                        {v.date === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div
                            className={classNames(
                              "calendar-date",
                              { "mode-1": v.mode === 1 },
                              { "mode-2": v.mode === 2 },
                              { "mode-3": v.mode === 3 },
                              { "mode-4": v.mode === 4 },
                              { "mode-5": v.mode === 5 },
                              { "mode-6": v.mode === 6 },
                              { "mode-7": v.mode === 7 },
                              { "mode-8": v.mode === 8 },
                              { "mode-9": v.mode === 9 },
                              { "mode-10": v.mode === 10 },
                              { "mode-11": v.mode === 11 },
                              { "mode-12": v.mode === 12 },
                              { "mode-13": v.mode === 13 },
                              { "mode-14": v.mode === 14 },
                              { "mode-15": v.mode >= 15 }
                            )}
                          ></div>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
            <div className="calendar-row">
              {currentMonthArr.map((v, i) => {
                return (
                  <>
                    {i >= 14 && i <= 20 && (
                      <>
                        {v.date === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div
                            className={classNames(
                              "calendar-date",
                              { "mode-1": v.mode === 1 },
                              { "mode-2": v.mode === 2 },
                              { "mode-3": v.mode === 3 },
                              { "mode-4": v.mode === 4 },
                              { "mode-5": v.mode === 5 },
                              { "mode-6": v.mode === 6 },
                              { "mode-7": v.mode === 7 },
                              { "mode-8": v.mode === 8 },
                              { "mode-9": v.mode === 9 },
                              { "mode-10": v.mode === 10 },
                              { "mode-11": v.mode === 11 },
                              { "mode-12": v.mode === 12 },
                              { "mode-13": v.mode === 13 },
                              { "mode-14": v.mode === 14 },
                              { "mode-15": v.mode >= 15 }
                            )}
                          ></div>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
            <div className="calendar-row">
              {currentMonthArr.map((v, i) => {
                return (
                  <>
                    {i >= 21 && i <= 27 && (
                      <>
                        {v.date === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div
                            className={classNames(
                              "calendar-date",
                              { "mode-1": v.mode === 1 },
                              { "mode-2": v.mode === 2 },
                              { "mode-3": v.mode === 3 },
                              { "mode-4": v.mode === 4 },
                              { "mode-5": v.mode === 5 },
                              { "mode-6": v.mode === 6 },
                              { "mode-7": v.mode === 7 },
                              { "mode-8": v.mode === 8 },
                              { "mode-9": v.mode === 9 },
                              { "mode-10": v.mode === 10 },
                              { "mode-11": v.mode === 11 },
                              { "mode-12": v.mode === 12 },
                              { "mode-13": v.mode === 13 },
                              { "mode-14": v.mode === 14 },
                              { "mode-15": v.mode >= 15 }
                            )}
                          ></div>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
            <div className="calendar-row">
              {currentMonthArr.map((v, i) => {
                return (
                  <>
                    {i >= 28 && i <= 34 && (
                      <>
                        {v.date === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div
                            className={classNames(
                              "calendar-date",
                              { "mode-1": v.mode === 1 },
                              { "mode-2": v.mode === 2 },
                              { "mode-3": v.mode === 3 },
                              { "mode-4": v.mode === 4 },
                              { "mode-5": v.mode === 5 },
                              { "mode-6": v.mode === 6 },
                              { "mode-7": v.mode === 7 },
                              { "mode-8": v.mode === 8 },
                              { "mode-9": v.mode === 9 },
                              { "mode-10": v.mode === 10 },
                              { "mode-11": v.mode === 11 },
                              { "mode-12": v.mode === 12 },
                              { "mode-13": v.mode === 13 },
                              { "mode-14": v.mode === 14 },
                              { "mode-15": v.mode >= 15 }
                            )}
                          ></div>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
            <div className="calendar-row">
              {currentMonthArr.map((v, i) => {
                return (
                  <>
                    {i >= 35 && i <= 41 && (
                      <>
                        {v.date === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div
                            className={classNames(
                              "calendar-date",
                              { "mode-1": v.mode === 1 },
                              { "mode-2": v.mode === 2 },
                              { "mode-3": v.mode === 3 },
                              { "mode-4": v.mode === 4 },
                              { "mode-5": v.mode === 5 },
                              { "mode-6": v.mode === 6 },
                              { "mode-7": v.mode === 7 },
                              { "mode-8": v.mode === 8 },
                              { "mode-9": v.mode === 9 },
                              { "mode-10": v.mode === 10 },
                              { "mode-11": v.mode === 11 },
                              { "mode-12": v.mode === 12 },
                              { "mode-13": v.mode === 13 },
                              { "mode-14": v.mode === 14 },
                              { "mode-15": v.mode >= 15 }
                            )}
                          ></div>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="border"></div>
        <div className="month-container">
          <div className="month-title">
            {currentYear}. {nextMonth + 1}.
          </div>
          <div className="month-days">
            <div className="day">일</div>
            <div className="day">월</div>
            <div className="day">화</div>
            <div className="day">수</div>
            <div className="day">목</div>
            <div className="day">금</div>
            <div className="day">토</div>
          </div>
          <div className="month-calendar">
            <div className="calendar-row">
              {nextMonthArr.map((v, i) => {
                return (
                  <>
                    {i >= 0 && i <= 6 && (
                      <>
                        {v.date === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div
                            className={classNames(
                              "calendar-date",
                              { "mode-1": v.mode === 1 },
                              { "mode-2": v.mode === 2 },
                              { "mode-3": v.mode === 3 },
                              { "mode-4": v.mode === 4 },
                              { "mode-5": v.mode === 5 },
                              { "mode-6": v.mode === 6 },
                              { "mode-7": v.mode === 7 },
                              { "mode-8": v.mode === 8 },
                              { "mode-9": v.mode === 9 },
                              { "mode-10": v.mode === 10 },
                              { "mode-11": v.mode === 11 },
                              { "mode-12": v.mode === 12 },
                              { "mode-13": v.mode === 13 },
                              { "mode-14": v.mode === 14 },
                              { "mode-15": v.mode >= 15 }
                            )}
                          ></div>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
            <div className="calendar-row">
              {nextMonthArr.map((v, i) => {
                return (
                  <>
                    {i >= 7 && i <= 13 && (
                      <>
                        {v.date === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div
                            className={classNames(
                              "calendar-date",
                              { "mode-1": v.mode === 1 },
                              { "mode-2": v.mode === 2 },
                              { "mode-3": v.mode === 3 },
                              { "mode-4": v.mode === 4 },
                              { "mode-5": v.mode === 5 },
                              { "mode-6": v.mode === 6 },
                              { "mode-7": v.mode === 7 },
                              { "mode-8": v.mode === 8 },
                              { "mode-9": v.mode === 9 },
                              { "mode-10": v.mode === 10 },
                              { "mode-11": v.mode === 11 },
                              { "mode-12": v.mode === 12 },
                              { "mode-13": v.mode === 13 },
                              { "mode-14": v.mode === 14 },
                              { "mode-15": v.mode >= 15 }
                            )}
                          ></div>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
            <div className="calendar-row">
              {nextMonthArr.map((v, i) => {
                return (
                  <>
                    {i >= 14 && i <= 20 && (
                      <>
                        {v.date === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div
                            className={classNames(
                              "calendar-date",
                              { "mode-1": v.mode === 1 },
                              { "mode-2": v.mode === 2 },
                              { "mode-3": v.mode === 3 },
                              { "mode-4": v.mode === 4 },
                              { "mode-5": v.mode === 5 },
                              { "mode-6": v.mode === 6 },
                              { "mode-7": v.mode === 7 },
                              { "mode-8": v.mode === 8 },
                              { "mode-9": v.mode === 9 },
                              { "mode-10": v.mode === 10 },
                              { "mode-11": v.mode === 11 },
                              { "mode-12": v.mode === 12 },
                              { "mode-13": v.mode === 13 },
                              { "mode-14": v.mode === 14 },
                              { "mode-15": v.mode >= 15 }
                            )}
                          ></div>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
            <div className="calendar-row">
              {nextMonthArr.map((v, i) => {
                return (
                  <>
                    {i >= 21 && i <= 27 && (
                      <>
                        {v.date === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div
                            className={classNames(
                              "calendar-date",
                              { "mode-1": v.mode === 1 },
                              { "mode-2": v.mode === 2 },
                              { "mode-3": v.mode === 3 },
                              { "mode-4": v.mode === 4 },
                              { "mode-5": v.mode === 5 },
                              { "mode-6": v.mode === 6 },
                              { "mode-7": v.mode === 7 },
                              { "mode-8": v.mode === 8 },
                              { "mode-9": v.mode === 9 },
                              { "mode-10": v.mode === 10 },
                              { "mode-11": v.mode === 11 },
                              { "mode-12": v.mode === 12 },
                              { "mode-13": v.mode === 13 },
                              { "mode-14": v.mode === 14 },
                              { "mode-15": v.mode >= 15 }
                            )}
                          ></div>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
            <div className="calendar-row">
              {nextMonthArr.map((v, i) => {
                return (
                  <>
                    {i >= 28 && i <= 34 && (
                      <>
                        {v.date === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div
                            className={classNames(
                              "calendar-date",
                              { "mode-1": v.mode === 1 },
                              { "mode-2": v.mode === 2 },
                              { "mode-3": v.mode === 3 },
                              { "mode-4": v.mode === 4 },
                              { "mode-5": v.mode === 5 },
                              { "mode-6": v.mode === 6 },
                              { "mode-7": v.mode === 7 },
                              { "mode-8": v.mode === 8 },
                              { "mode-9": v.mode === 9 },
                              { "mode-10": v.mode === 10 },
                              { "mode-11": v.mode === 11 },
                              { "mode-12": v.mode === 12 },
                              { "mode-13": v.mode === 13 },
                              { "mode-14": v.mode === 14 },
                              { "mode-15": v.mode >= 15 }
                            )}
                          ></div>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
            <div className="calendar-row">
              {nextMonthArr.map((v, i) => {
                return (
                  <>
                    {i >= 35 && i <= 41 && (
                      <>
                        {v.date === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div
                            className={classNames(
                              "calendar-date",
                              { "mode-1": v.mode === 1 },
                              { "mode-2": v.mode === 2 },
                              { "mode-3": v.mode === 3 },
                              { "mode-4": v.mode === 4 },
                              { "mode-5": v.mode === 5 },
                              { "mode-6": v.mode === 6 },
                              { "mode-7": v.mode === 7 },
                              { "mode-8": v.mode === 8 },
                              { "mode-9": v.mode === 9 },
                              { "mode-10": v.mode === 10 },
                              { "mode-11": v.mode === 11 },
                              { "mode-12": v.mode === 12 },
                              { "mode-13": v.mode === 13 },
                              { "mode-14": v.mode === 14 },
                              { "mode-15": v.mode >= 15 }
                            )}
                          ></div>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Record;
