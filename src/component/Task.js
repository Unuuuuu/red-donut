import React from "react";
import { useMainContext } from "./Main";
import "./Task.css";

const Task = () => {
  const { taskArr } = useMainContext();
  return (
    <div className="Task">
      {taskArr.map((v) => (
        <div className="task-arr">{v}</div>
      ))}
    </div>
  );
};

export default Task;
