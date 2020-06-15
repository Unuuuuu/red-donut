import React from "react";
import "./Task.css";

const Task = (props) => {
  const taskArr = props.taskArr;
  return (
    <>
      {taskArr.map((v) => (
        <div className="task-arr">{v}</div>
      ))}
    </>
  );
};

export default Task;
