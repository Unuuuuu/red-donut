import React from "react";
import classNames from "classnames";
import { useMainContext, VOLUME } from "./Main";
import "./Interaction.css";

const Interaction = () => {
  const {
    isStarted,
    setIsStarted,
    currentTask,
    setCurrentTask,
    vol,
    setVol,
  } = useMainContext();
  return (
    <div className="interaction-comp">
      <input
        className={classNames("task-input", { "is-started": isStarted })}
        placeholder="Task"
        onChange={(e) => setCurrentTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.keyCode === 13) setIsStarted(true);
        }}
        value={currentTask}
        readOnly={isStarted}
      ></input>
      <button
        className="speaker-btn btn"
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
      <button className="record-btn btn">
        <span role="img" aria-label="record">
          📜
        </span>
      </button>
    </div>
  );
};

export default Interaction;
