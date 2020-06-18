import React from "react";
import Main from "./Main";
import "./Pomodoro.css";

const Pomodoro = () => {
  return (
    <div className="pomodoro-comp">
      <div className="pomodoro-header">
        <div className="pomodoro-title">
          <span style={{ color: "#e25a5a" }}>Red</span>
          <span style={{ color: "#00cc58" }}>
            {" "}
            Donut{" "}
            <span role="img" aria-label="donut">
              🍩
            </span>
          </span>
        </div>
      </div>
      <Main />
    </div>
  );
};
export default Pomodoro;
