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
      {[...groupedTasksByDate].reverse().map((taskByDate) => (
        <>
          <DateAndNumber taskByDate={taskByDate} />
          {taskByDate.map((task) => (
            <TaskList task={task} />
          ))}
          <div className="task-border"></div>
        </>
      ))}
      {tasks.length === 0 && <div class="task-title">Task List</div>}
    </div>
  );
};

export default Task;
