import React, { useState } from "react";
import classNames from "classnames";
import { useMainContext, VOLUME } from "./Main";
import "./Interaction.css";

const Interaction = () => {
  const { isStarted, setIsStarted, currentTask, setCurrentTask, vol, setVol, setMin5, setMin10, setMin25, setMin50 } = useMainContext();
  const [isTestMode, setIsTestMode] = useState(false);
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
      {isTestMode === true && (
        <button
          className={classNames("test-true-btn btn", { "is-started": isStarted })}
          onClick={() => {
            if (!isStarted) {
              setMin5(5 * 60);
              setMin10(10 * 60);
              setMin25(25 * 60);
              setMin50(50 * 60);
              setIsTestMode(false);
            }
          }}
        >
          Test
        </button>
      )}
      {isTestMode === false && (
        <button
          className={classNames("test-false-btn btn", { "is-started": isStarted })}
          onClick={() => {
            if (!isStarted) {
              setMin5(1);
              setMin10(1);
              setMin25(1);
              setMin50(1);
              setIsTestMode(true);
            }
          }}
        >
          Test
        </button>
      )}
    </div>
  );
};

export default Interaction;
