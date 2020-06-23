import React from "react";
import "./Record.css";

const Record = () => {
  return (
    <div className="record-comp">
      <div className="record-container">
        <div className="blank-day-container">
          <div className="blank"></div>
          <div className="day">
            <div className="day-ele">Mon</div>
            <div className="day-ele">Wed</div>
            <div className="day-ele">Fri</div>
          </div>
        </div>
        <div className="month-boxes-container">
          <div className="month">
            <div className="month-ele">Jan</div>
            <div className="month-ele">Feb</div>
            <div className="month-ele">Mar</div>
            <div className="month-ele">Apr</div>
            <div className="month-ele">May</div>
            <div className="month-ele">Jun</div>
            <div className="month-ele">Jul</div>
            <div className="month-ele">Aug</div>
            <div className="month-ele">Sep</div>
            <div className="month-ele">Oct</div>
            <div className="month-ele">Nov</div>
            <div className="month-ele">Dec</div>
          </div>
          <div className="boxes">
            <div className="box-column">
              <div className="box"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Record;
