import React, { useState, useEffect } from "react";
import "./Record.css";
import { useMainContext } from "./Main";

const Record = () => {
  const { groupArr } = useMainContext();
  const date = new Date();
  const currentYear = date.getFullYear();

  const prevPrevMonth = date.getMonth() - 2;
  const prevPrevMonthFirstDate = new Date(
    currentYear,
    prevPrevMonth,
    1
  ).getDate();
  const prevPrevMonthLastDate = new Date(
    currentYear,
    prevPrevMonth + 1,
    0
  ).getDate();
  const prevPrevMonthFirstDay = new Date(
    currentYear,
    prevPrevMonth,
    1
  ).getDay();
  const prevPrevMonthLastDay = new Date(
    currentYear,
    prevPrevMonth + 1,
    0
  ).getDay();
  const prevPrevMonthArr = [];

  const prevMonth = date.getMonth() - 1;
  const prevMonthFirstDate = new Date(currentYear, prevMonth, 1).getDate();
  const prevMonthLastDate = new Date(currentYear, prevMonth + 1, 0).getDate();
  const prevMonthFirstDay = new Date(currentYear, prevMonth, 1).getDay();
  const prevMonthLastDay = new Date(currentYear, prevMonth + 1, 0).getDay();
  const prevMonthArr = [];

  const currentMonth = date.getMonth();
  const currentMonthFirstDate = new Date(
    currentYear,
    currentMonth,
    1
  ).getDate();
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

  const [prevMonthTaskArr, setPrevMonthTaskArr] = useState();
  const [currentMonthTaskArr, setCurrentMonthTaskArr] = useState();

  for (let i = 0; i < prevPrevMonthLastDate; i++) {
    prevPrevMonthArr.push(i + 1);
  }
  for (let i = 0; i < prevMonthLastDate; i++) {
    prevMonthArr.push(i + 1);
  }
  for (let i = 0; i < currentMonthLastDate; i++) {
    currentMonthArr.push(i + 1);
  }

  if (prevPrevMonthLastDay === 0)
    prevPrevMonthArr.splice(prevPrevMonthLastDate, 0, 0, 0, 0, 0, 0, 0);
  else if (prevPrevMonthLastDay === 1)
    prevPrevMonthArr.splice(prevPrevMonthLastDate, 0, 0, 0, 0, 0, 0);
  else if (prevPrevMonthLastDay === 2)
    prevPrevMonthArr.splice(prevPrevMonthLastDate, 0, 0, 0, 0, 0);
  else if (prevPrevMonthLastDay === 3)
    prevPrevMonthArr.splice(prevPrevMonthLastDate, 0, 0, 0, 0);
  else if (prevPrevMonthLastDay === 4)
    prevPrevMonthArr.splice(prevPrevMonthLastDate, 0, 0, 0);
  else if (prevPrevMonthLastDay === 5)
    prevPrevMonthArr.splice(prevPrevMonthLastDate, 0, 0);

  if (prevPrevMonthFirstDay === 1) prevPrevMonthArr.splice(0, 0, 0);
  else if (prevPrevMonthFirstDay === 3) prevPrevMonthArr.splice(0, 0, 0, 0, 0);
  else if (prevPrevMonthFirstDay === 2) prevPrevMonthArr.splice(0, 0, 0, 0);
  else if (prevPrevMonthFirstDay === 4)
    prevPrevMonthArr.splice(0, 0, 0, 0, 0, 0);
  else if (prevPrevMonthFirstDay === 5)
    prevPrevMonthArr.splice(0, 0, 0, 0, 0, 0, 0);
  else if (prevPrevMonthFirstDay === 6)
    prevPrevMonthArr.splice(0, 0, 0, 0, 0, 0, 0, 0);

  if (prevMonthLastDay === 0)
    prevMonthArr.splice(prevMonthLastDate, 0, 0, 0, 0, 0, 0, 0);
  else if (prevMonthLastDay === 1)
    prevMonthArr.splice(prevMonthLastDate, 0, 0, 0, 0, 0, 0);
  else if (prevMonthLastDay === 2)
    prevMonthArr.splice(prevMonthLastDate, 0, 0, 0, 0, 0);
  else if (prevMonthLastDay === 3)
    prevMonthArr.splice(prevMonthLastDate, 0, 0, 0, 0);
  else if (prevMonthLastDay === 4)
    prevMonthArr.splice(prevMonthLastDate, 0, 0, 0);
  else if (prevMonthLastDay === 5) prevMonthArr.splice(prevMonthLastDate, 0, 0);

  if (prevMonthFirstDay === 1) prevMonthArr.splice(0, 0, 0);
  else if (prevMonthFirstDay === 3) prevMonthArr.splice(0, 0, 0, 0, 0);
  else if (prevMonthFirstDay === 2) prevMonthArr.splice(0, 0, 0, 0);
  else if (prevMonthFirstDay === 4) prevMonthArr.splice(0, 0, 0, 0, 0, 0);
  else if (prevMonthFirstDay === 5) prevMonthArr.splice(0, 0, 0, 0, 0, 0, 0);
  else if (prevMonthFirstDay === 6) prevMonthArr.splice(0, 0, 0, 0, 0, 0, 0, 0);

  if (currentMonthLastDay === 0)
    currentMonthArr.splice(currentMonthLastDate, 0, 0, 0, 0, 0, 0, 0);
  else if (currentMonthLastDay === 1)
    currentMonthArr.splice(currentMonthLastDate, 0, 0, 0, 0, 0, 0);
  else if (currentMonthLastDay === 2)
    currentMonthArr.splice(currentMonthLastDate, 0, 0, 0, 0, 0);
  else if (currentMonthLastDay === 3)
    currentMonthArr.splice(currentMonthLastDate, 0, 0, 0, 0);
  else if (currentMonthLastDay === 4)
    currentMonthArr.splice(currentMonthLastDate, 0, 0, 0);
  else if (currentMonthLastDay === 5)
    currentMonthArr.splice(currentMonthLastDate, 0, 0);

  if (currentMonthFirstDay === 1) currentMonthArr.splice(0, 0, 0);
  else if (currentMonthFirstDay === 3) currentMonthArr.splice(0, 0, 0, 0, 0);
  else if (currentMonthFirstDay === 2) currentMonthArr.splice(0, 0, 0, 0);
  else if (currentMonthFirstDay === 4) currentMonthArr.splice(0, 0, 0, 0, 0, 0);
  else if (currentMonthFirstDay === 5)
    currentMonthArr.splice(0, 0, 0, 0, 0, 0, 0);
  else if (currentMonthFirstDay === 6)
    currentMonthArr.splice(0, 0, 0, 0, 0, 0, 0, 0);

  useEffect(() => {
    setPrevMonthTaskArr(
      groupArr.filter((v) => new Date(v[0].time).getMonth() === prevMonth)[0]
    );

    setCurrentMonthTaskArr(
      groupArr.filter((v) => new Date(v[0].time).getMonth() === currentMonth)[0]
    );
  }, [currentMonth, groupArr, prevMonth, prevMonth]);
  // console.log(prevMonthTaskArr);
  // console.log(currentMonthTaskArr);

  return (
    <div className="record-comp">
      <div className="record-container">
        <div className="month-container">
          <div className="month-title">
            {currentYear}. {prevPrevMonth + 1}.
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
              {prevPrevMonthArr.map((v, i) => {
                return (
                  <>
                    {i >= 0 && i <= 6 && (
                      <>
                        {v === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div className="calendar-date"></div>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
            <div className="calendar-row">
              {prevPrevMonthArr.map((v, i) => {
                return (
                  <>
                    {i >= 7 && i <= 13 && (
                      <>
                        {v === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div className="calendar-date"></div>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
            <div className="calendar-row">
              {prevPrevMonthArr.map((v, i) => {
                return (
                  <>
                    {i >= 14 && i <= 20 && (
                      <>
                        {v === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div className="calendar-date"></div>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
            <div className="calendar-row">
              {prevPrevMonthArr.map((v, i) => {
                return (
                  <>
                    {i >= 21 && i <= 27 && (
                      <>
                        {v === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div className="calendar-date"></div>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
            <div className="calendar-row">
              {prevPrevMonthArr.map((v, i) => {
                return (
                  <>
                    {i >= 28 && i <= 34 && (
                      <>
                        {v === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div className="calendar-date"></div>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
            <div className="calendar-row">
              {prevPrevMonthArr.map((v, i) => {
                return (
                  <>
                    {i >= 35 && i <= 41 && (
                      <>
                        {v === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div className="calendar-date"></div>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
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
                        {v === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div className="calendar-date"></div>
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
                        {v === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div className="calendar-date"></div>
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
                        {v === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div className="calendar-date"></div>
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
                        {v === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div className="calendar-date"></div>
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
                        {v === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div className="calendar-date"></div>
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
                        {v === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div className="calendar-date"></div>
                        )}
                      </>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
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
                        {v === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div className="calendar-date"></div>
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
                        {v === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div className="calendar-date"></div>
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
                        {v === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div className="calendar-date"></div>
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
                        {v === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div className="calendar-date"></div>
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
                        {v === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div className="calendar-date"></div>
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
                        {v === 0 ? (
                          <div className="calendar-blank"></div>
                        ) : (
                          <div className="calendar-date"></div>
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
