import React, { useState, useContext } from "react";
import Clock from "./Clock";
import Btns from "./Btns";
import TaskInput from "./TaskInput";
import Task from "./Task";
import "./Main.css";

const MainContext = React.createContext({
  sec: null,
  setSec: () => {},
  startToggle: false,
  setStartToggle: () => {},
  pauseToggle: false,
  setPauseToggle: () => {},
  min30: true,
  setMin30: () => {},
  min60: false,
  setMin60: () => {},
  mode1: false,
  setMode1: () => {},
  mode2: false,
  setMode2: () => {},
  task: "",
  setTask: () => {},
  taskArr: [],
  setTaskArr: () => {},
});

export const useMainContext = () => useContext(MainContext);

const Main = () => {
  const [sec, setSec] = useState(null);
  const [startToggle, setStartToggle] = useState(false);
  const [pauseToggle, setPauseToggle] = useState(false);
  const [min30, setMin30] = useState(true);
  const [min60, setMin60] = useState(false);
  const [mode1, setMode1] = useState(false);
  const [mode2, setMode2] = useState(false);
  const [task, setTask] = useState("");
  const [taskArr, setTaskArr] = useState([]);
  return (
    <MainContext.Provider
      value={{
        sec,
        setSec,
        startToggle,
        setStartToggle,
        pauseToggle,
        setPauseToggle,
        min30,
        setMin30,
        min60,
        setMin60,
        mode1,
        setMode1,
        mode2,
        setMode2,
        task,
        setTask,
        taskArr,
        setTaskArr,
      }}
    >
      <div className="Main">
        <div className="ClockContainer">
          <Clock
            sec={sec}
            pauseToggle={pauseToggle}
            startToggle={startToggle}
            mode1={mode1}
            mode2={mode2}
            task={task}
          />
          <Btns />
          <TaskInput />
        </div>
        <div className="RecordContainer">
          <Task taskArr={taskArr} />
        </div>
      </div>
    </MainContext.Provider>
  );
};

export default Main;
