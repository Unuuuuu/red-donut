import React from "react";
import classNames from "classnames";
import { useMainContext, VOLUME } from "./Main";
import "./TaskInput.css";

const TaskInput = () => {
  const {
    isStarted,
    setIsStarted,
    currentTask,
    setCurrentTask,
    vol,
    setVol,
  } = useMainContext();
  return (
    <div className="TaskInput">
      <input
        className={classNames("input", { isStarted })}
        placeholder="Task"
        onChange={(e) => setCurrentTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.keyCode === 13) setIsStarted(true);
        }}
        value={currentTask}
        readOnly={isStarted}
      ></input>
      <button
        className="SpeakerBtn btn"
        onClick={() => {
          if (vol === VOLUME.MEDIUM) setVol(100);
          else if (vol === VOLUME.HIGH) setVol(0);
          else if (vol === VOLUME.MUTE) setVol(50);
        }}
      >
        {vol === VOLUME.MUTE && (
          <span role="img" aria-label="speaker">
            🔈
          </span>
        )}
        {vol === VOLUME.MEDIUM && (
          <span role="img" aria-label="speaker">
            🔉
          </span>
        )}
        {vol === VOLUME.HIGH && (
          <span role="img" aria-label="speaker">
            🔊
          </span>
        )}
      </button>
      <button className="RecordBtn btn">
        <span role="img" aria-label="record">
          📜
        </span>
      </button>
    </div>
  );
};

export default TaskInput;
