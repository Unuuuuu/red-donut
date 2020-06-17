import React, { useState, useContext } from "react";
import Clock from "./Clock";
import Btns from "./Btns";
import TaskInput from "./TaskInput";
import Task from "./Task";
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
  taskArr: [],
  setTaskArr: () => {},
  pomoNum: 0,
  setPomoNum: () => {},
  vol: 50,
  setVol: () => {},
});

export const useMainContext = () => useContext(MainContext);

const Main = () => {
  const [sec, setSec] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentMode, setCurrentMode] = useState(MODE.MIN30);
  const [currentStatus, setCurrentStatus] = useState(STATUS.DEFAULT);
  const [currentTask, setCurrentTask] = useState("");
  const [taskArr, setTaskArr] = useState([]);
  const [pomoNum, setPomoNum] = useState(0);
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
        pomoNum,
        setPomoNum,
        vol,
        setVol,
      }}
    >
      <div className="Main">
        <div className="ClockContainer">
          <Clock />
          <Btns />
          <TaskInput />
        </div>
        <div className="RecordContainer">
          <Task />
          <Record />
        </div>
      </div>
    </MainContext.Provider>
  );
};

export default Main;
