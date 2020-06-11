import React from "react";
import Timer from "./Timer";
import img from "../../img/pomodoro.png";

const Pomodoro = () => {
  return (
    <>
      <img src={img} alt="alt"></img>
      <br />
      <Timer />
    </>
  );
};
export default Pomodoro;
