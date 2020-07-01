import React, { useMemo } from "react";
import { useMainContext } from "./Main";
import "./Task.css";
import { getGroupedTasksByDate } from "../util/taskUtil";
import DateAndNumber from "./DateAndNumber";
import TaskList from "./TaskList";

const Task = () => {
  const { tasks } = useMainContext();

  const groupedTasksByDate = useMemo(() => getGroupedTasksByDate(tasks), [tasks]);

  return (
    <div className="task">
      {[...groupedTasksByDate].reverse().map((taskByDate, index1) => (
        <React.Fragment key={index1}>
          <DateAndNumber taskByDate={taskByDate} />
          {taskByDate.map((task, index2) => (
            <TaskList task={task} key={index2} />
          ))}
          <div className="task-border"></div>
        </React.Fragment>
      ))}
      {tasks.length === 0 && <div class="task-title">Task List</div>}
    </div>
  );
};

export default Task;
