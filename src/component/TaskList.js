import React from "react";
import { useMainContext, MODE } from "./Main";
import classNames from "classnames";
import numWords from "num-words";
import "./TaskList.css";

const Task = () => {
  const { taskArr } = useMainContext();
  const timeArr = [];
  for (let i = 0; i < taskArr.length; i++) {
    if (!timeArr.includes(new Date(taskArr[i].time).toLocaleDateString()))
      timeArr.push(new Date(taskArr[i].time).toLocaleDateString());
  }
  const groupArr = [];
  for (let i = 0; i < timeArr.length; i++) {
    groupArr.push(
      taskArr.filter(
        (v) => new Date(v.time).toLocaleDateString() === timeArr[i]
      )
    );
  }

  console.log(groupArr);
  return (
    <div className="task-list-comp">
      <div className="task-list-container">
        {groupArr.map((v) => (
          <>
            <div className="day-and-number">
              {new Date(v[0].time).toLocaleDateString()}
              <div>
                {/* <span style={{ color: "black", fontWeight: "bold" }}>
              {amountInWords}
            </span> */}
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
        {/* {taskArr.length !== 0 && ({
          timeArr.map((v)=>{
            for(const ele of taskArr){
              if(v === ele.time){
                return <div></div>
              }
        }}}
          <>
            <div className="task-list">
              {taskArr.map((v) => (
                <div className="task-box">
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
            <div className="border"></div>
            <div className="day-and-number">
              {taskArr.map((v) => (
                <span>{v["time"]}</span>
              ))}
              {console.log(taskArr[0].time)}
              <div>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {amountInWords}
                </span>
                <span> </span>
                <span role="img" aria-label="donut">
                  🍩
                </span>
              </div>
            </div>
          </>
        )} */}
        {taskArr.length === 0 && <div class="task-list-title">Task List</div>}
      </div>
    </div>
  );
};

export default Task;
