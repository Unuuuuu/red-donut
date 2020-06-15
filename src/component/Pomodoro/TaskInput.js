import React from "react";
import { useMainContext } from "./Main";

const TaskInput = () => {
  const { setStartToggle, setTask } = useMainContext();
  return (
    <div className="TaskInput">
      <input
        placeholder="할 일 ▶ Enter / Start"
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.keyCode === 13) setStartToggle(true);
        }}
      ></input>
    </div>
  );
};

export default TaskInput;
