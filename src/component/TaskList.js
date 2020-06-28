import React from "react";
import { MODE } from "./Main";
import classNames from "classnames";

const TaskList = (props) => {
  return (
    <div className="task-list">
      <div className="task-color-box">
        <div
          className={classNames(
            "task-box",
            { "min30-color": props.task.mode === MODE.MIN30 },
            { "min60-color": props.task.mode === MODE.MIN60 }
          )}
        ></div>
        <div className="task-item">{props.task.task}</div>
      </div>
    </div>
  );
};

export default TaskList;
