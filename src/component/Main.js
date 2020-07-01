import React, { useState, useContext } from "react";
import Clock from "./Clock";
import ClockControlBtn from "./ClockControlBtn";
import Interaction from "./Interaction";
import Task from "./Task";
import Calendar from "./Calendar";
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
  tasks: [],
  setTasks: () => {},
  vol: 50,
  setVol: () => {},
  min5: 0,
  setMin5: () => {},
  min10: 0,
  setMin10: () => {},
  min25: 0,
  setMin25: () => {},
  min50: 0,
  setMin50: () => {},
});

export const useMainContext = () => useContext(MainContext);

const Main = () => {
  const [sec, setSec] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentMode, setCurrentMode] = useState(MODE.MIN30);
  const [currentStatus, setCurrentStatus] = useState(STATUS.DEFAULT);
  const [currentTask, setCurrentTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const item = localStorage.getItem("tasks");
    console.log(item);
    return item ? JSON.parse(item) : [];
  });
  const [vol, setVol] = useState(VOLUME.MEDIUM);
  const [min5, setMin5] = useState(5 * 60);
  const [min10, setMin10] = useState(10 * 60);
  const [min25, setMin25] = useState(25 * 60);
  const [min50, setMin50] = useState(50 * 60);

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
        tasks,
        setTasks,
        vol,
        setVol,
        min5,
        setMin5,
        min10,
        setMin10,
        min25,
        setMin25,
        min50,
        setMin50,
      }}
    >
      <div className="main-comp">
        <div className="clock-and-interaction-container">
          <Clock />
          <ClockControlBtn />
          <Interaction />
        </div>
        <div className="task-list-and-calendar-container">
          <Task />
          <Calendar />
        </div>
      </div>
    </MainContext.Provider>
  );
};

export default Main;
