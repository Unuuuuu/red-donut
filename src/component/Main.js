import React, { useState, useContext } from "react";
import Clock from "./Clock";
import ClockControlBtn from "./ClockControlBtn";
import Interaction from "./Interaction";
import TaskList from "./TaskList";
import Record from "./Record";
import "./Main.css";

export const MODE = {
  MIN30: 1,
  MIN60: 2,
};

export const STATUS = {
  DEFAULT: 0,
  WORK: 1,
  BREAK: 2,
};

export const VOLUME = {
  MUTE: 0,
  MEDIUM: 50,
  HIGH: 100,
};

const MainContext = React.createContext({
  sec: null,
  setSec: () => {},
  isStarted: false,
  setIsStarted: () => {},
  isPaused: false,
  setIsPaused: () => {},
  currentMode: MODE.MIN30,
  setCurrentMode: () => {},
  currentStatus: STATUS.DEFAULT,
  setCurrentStatus: () => {},
  currentTask: "",
  setCurretTask: () => {},
  taskArr: [
    { task: "test", mode: 1, time: 1593000528494 },
    { task: "test2", mode: 1, time: 1593000528494 },
    { task: "test3", mode: 1, time: 1590409308205 },
    { task: "dd", mode: 2, time: 1492718346338 },
  ],
  setTaskArr: () => {},
  vol: 50,
  setVol: () => {},
  timeArr: [],
  setTimeArr: () => {},
  groupArr: [],
  setGroupArr: () => {},
});

export const useMainContext = () => useContext(MainContext);

const Main = () => {
  const [sec, setSec] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentMode, setCurrentMode] = useState(MODE.MIN30);
  const [currentStatus, setCurrentStatus] = useState(STATUS.DEFAULT);
  const [currentTask, setCurrentTask] = useState("");
  const [taskArr, setTaskArr] = useState([
    { task: "test", mode: 1, time: 1593000528494 },
    { task: "test2", mode: 1, time: 1593000528494 },
    { task: "test3", mode: 1, time: 1590409308205 },
    { task: "dd", mode: 2, time: 1492718346338 },
  ]);
  const [timeArr, setTimeArr] = useState([]);
  const [groupArr, setGroupArr] = useState([]);
  const [vol, setVol] = useState(50);
  return (
    <MainContext.Provider
      value={{
        sec,
        setSec,
        isStarted,
        setIsStarted,
        isPaused,
        setIsPaused,
        currentMode,
        setCurrentMode,
        currentStatus,
        setCurrentStatus,
        currentTask,
        setCurrentTask,
        taskArr,
        setTaskArr,
        vol,
        setVol,
        timeArr,
        setTimeArr,
        groupArr,
        setGroupArr,
      }}
    >
      <div className="main-comp">
        <div className="clock-and-interaction-container">
          <Clock />
          <ClockControlBtn />
          <Interaction />
        </div>
        <div className="task-list-and-record-container">
          <TaskList />
          <Record />
        </div>
      </div>
    </MainContext.Provider>
  );
};

export default Main;
