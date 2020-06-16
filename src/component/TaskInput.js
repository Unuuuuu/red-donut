import React from "react";
import classNames from "classnames";
import { useMainContext } from "./Main";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFile } from "@fortawesome/free-solid-svg-icons";
// import { faFile as faFileRegular } from "@fortawesome/free-regular-svg-icons";
import "./TaskInput.css";

const TaskInput = () => {
  const {
    isStarted,
    setIsStarted,
    currentTask,
    setCurrentTask,
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
      <button className="RecordBtn btn">
        📜
        {/* <FontAwesomeIcon icon={faFile} size="10px" color="gray" /> */}
      </button>
    </div>
  );
};

export default TaskInput;
