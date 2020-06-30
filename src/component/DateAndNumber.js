import React from "react";
import numWords from "num-words";
import ntdmn from "number-to-date-month-name";

const DateAndNumber = (props) => {
  const time = new Date(props.taskByDate[0].time);
  const year = time.getFullYear();
  const month = time.getMonth();
  const date = time.getDate();
  return (
    <div className="date-and-number">
      <span>
        {ntdmn.toMonth(month + 1)} {date}, {year}
      </span>
      <div>
        <span>{numWords(props.taskByDate.reduce((a, c) => a + c.mode, 0))}</span>
        <span> </span>
        <span role="img" aria-label="donut">
          🍩
        </span>
      </div>
    </div>
  );
};

export default DateAndNumber;
