import React from "react";
import numWords from "num-words";

const DateAndNumber = (props) => {
  return (
    <div className="date-and-number">
      {new Date(props.taskByDate[0].time).toLocaleDateString()}
      <div>
        <span>
          {numWords(props.taskByDate.reduce((a, c) => a + c.mode, 0))}
        </span>
        <span> </span>
        <span role="img" aria-label="donut">
          🍩
        </span>
      </div>
    </div>
  );
};

export default DateAndNumber;
