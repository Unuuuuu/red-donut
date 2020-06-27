import React, { useEffect } from "react";
import { useMainContext, MODE } from "./Main";
import classNames from "classnames";
import numWords from "num-words";
import "./TaskList.css";

const Task = () => {
  const {
    taskArr,
    timeArr,
    setTimeArr,
    groupArr,
    setGroupArr,
  } = useMainContext();

  useEffect(() => {
    for (let i = 0; i < taskArr.length; i++) {
      if (!timeArr.includes(new Date(taskArr[i].time).toLocaleDateString()))
        setTimeArr([
          ...timeArr,
          new Date(taskArr[i].time).toLocaleDateString(),
        ]);
    }
    const arr = [];
    for (let i = 0; i < timeArr.length; i++) {
      arr.push(
        taskArr.filter(
          (v) => new Date(v.time).toLocaleDateString() === timeArr[i]
        )
      );
    }
    setGroupArr(arr);
  }, [taskArr, timeArr, setGroupArr, setTimeArr]);

  return (
    <div className="task-list-comp">
      <div className="task-list-container">
        {[...groupArr].reverse().map((v) => (
          <>
            <div className="day-and-number">
              {new Date(v[0].time).toLocaleDateString()}
              <div>
                <span>{numWords(v.reduce((a, c) => a + c.mode, 0))}</span>
                <span> </span>
                <span role="img" aria-label="donut">
                  🍩
                </span>
              </div>
            </div>
            {v.map((v2) => (
              <div className="task-list">
                <div className="task-box">
                  <div
                    className={classNames(
                      "box",
                      { min30: v2.mode === MODE.MIN30 },
                      { min60: v2.mode === MODE.MIN60 }
                    )}
                  ></div>
                  <div className="task-arr">{v2.task}</div>
                </div>
              </div>
            ))}
            <div className="border"></div>
          </>
        ))}
        {taskArr.length === 0 && <div class="task-list-title">Task List</div>}
      </div>
    </div>
  );
};

export default Task;
