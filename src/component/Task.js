import React from "react";
import { useMainContext, MODE } from "./Main";
import classNames from "classnames";
import numWords from "num-words";
import "./Task.css";

const Task = () => {
  const { taskArr, pomoNum } = useMainContext();
  const amountInWords = numWords(pomoNum);
  return (
    <div className="Task">
      <div className="TaskListAndRecordContainer">
        <div className="TaskListContainer">
          {taskArr.map((v) => (
            <div className="TaskContainer">
              <div
                className={classNames(
                  "box",
                  { min30: v["mode"] === MODE.MIN30 },
                  { min60: v["mode"] === MODE.MIN60 }
                )}
              ></div>
              <div className="task-arr">{v["task"]}</div>
            </div>
          ))}
        </div>
        {taskArr.length !== 0 && (
          <>
            <div className="border"></div>
            <div className="record">
              <span style={{ color: "black", fontWeight: "bold" }}>
                {amountInWords}
              </span>
              <span> </span>
              <span role="img" aria-label="donut">
                🍩
              </span>
            </div>
          </>
        )}
        {taskArr.length === 0 && <div class="title">Task List</div>}
      </div>
    </div>
  );
};

export default Task;
