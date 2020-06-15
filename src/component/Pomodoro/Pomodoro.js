import React from "react";
import Main from "./Main";
import "./Pomodoro.css";

const Pomodoro = () => {
  return (
    <div className="Pomodoro">
      <div className="Header">
        <div className="title">P o m o d o r o</div>
      </div>
      <Main />
    </div>
  );
};
export default Pomodoro;
