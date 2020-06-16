import React, { useRef, useEffect, useCallback } from "react";
import classNames from "classnames";
import { useMainContext, STATUS, MODE } from "./Main";
import min30img from "../img/min301024.png";
import min60img from "../img/min601024.png";
import "./Btns.css";

const Btns = () => {
  const {
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
  } = useMainContext();
  const timeoutRef = useRef(null);
  const isFirstTime = useCallback(() => sec === null, [sec]);
  const isEndTime = useCallback(() => sec === 0, [sec]);
  const handleReset = useCallback(() => {
    setIsStarted(false);
    setIsPaused(false);
    setSec(null);
    setCurrentTask("");
    setCurrentStatus(STATUS.DEFAULT);
    clearTimeout(timeoutRef.current);
  }, [setIsStarted, setIsPaused, setSec, setCurrentTask, setCurrentStatus]);
  const MIN5 = 5 * 60;
  const MIN10 = 10 * 60;
  const MIN25 = 25 * 60;
  const MIN50 = 50 * 60;

  useEffect(() => {
    if (isStarted) {
      if (isFirstTime()) {
        if (currentMode === MODE.MIN30) {
          setCurrentStatus(STATUS.WORK);
          setSec(MIN25);
        }
        if (currentMode === MODE.MIN60) {
          setCurrentStatus(STATUS.WORK);
          setSec(MIN50);
        }
        return;
      }
      if (isEndTime()) {
        if (currentStatus === STATUS.WORK) {
          if (currentMode === MODE.MIN30) {
            setCurrentMode(STATUS.BREAK);
            setSec(MIN5);
          }
          if (currentMode === MODE.MIN60) {
            setCurrentMode(STATUS.BREAK);
            setSec(MIN10);
          }
        }
        if (currentStatus === STATUS.WORK) {
          setTaskArr([...taskArr, currentTask]);
          handleReset();
        }
        return;
      }
      if (isPaused) {
        clearTimeout(timeoutRef.current);
        return;
      }
      timeoutRef.current = setTimeout(() => {
        setSec(sec - 1);
      }, 1000);
    }
  }, [
    sec,
    isStarted,
    isPaused,
    MIN5,
    MIN10,
    MIN25,
    MIN50,
    currentMode,
    currentStatus,
    currentTask,
    handleReset,
    isEndTime,
    isFirstTime,
    setCurrentMode,
    setCurrentStatus,
    setSec,
    setTaskArr,
    taskArr,
  ]);

  return (
    <div className="Btns">
      {isStarted && isPaused && (
        <button
          className="resume-btn btn"
          onClick={() => {
            setIsPaused(false);
          }}
        >
          resume
        </button>
      )}
      {isStarted && !isPaused && (
        <button
          className="pause-btn btn"
          onClick={() => {
            setIsPaused(true);
          }}
        >
          pause
        </button>
      )}
      {isStarted && (
        <button
          className="reset-btn btn"
          onClick={() => {
            handleReset();
          }}
        >
          reset
        </button>
      )}
      {!isStarted && (
        <button
          className="start-btn btn"
          onClick={() => {
            setIsStarted(true);
          }}
        >
          Start
        </button>
      )}
      {!isStarted && (
        <button
          className={classNames("min30-btn", "btn", {
            clicked: currentMode === MODE.MIN30,
          })}
          onClick={() => {
            setCurrentMode(MODE.MIN30);
          }}
        >
          <img src={min30img} alt="MIN30" />
        </button>
      )}
      {!isStarted && (
        <button
          className={classNames("min60-btn", "btn", {
            clicked: currentMode === MODE.MIN60,
          })}
          onClick={() => {
            setCurrentMode(MODE.MIN60);
          }}
        >
          <img src={min60img} alt="MIN60" />
        </button>
      )}
    </div>
  );
};

export default Btns;
