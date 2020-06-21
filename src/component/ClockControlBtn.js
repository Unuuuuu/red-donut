import React, { useRef, useEffect, useCallback, useState } from "react";
import { useMainContext, STATUS, MODE } from "./Main";
import Sound from "react-sound";
import work from "../assets/work.mp3";
import rest from "../assets/break.mp3";
import end from "../assets/end2.mp3";
import classNames from "classnames";
import min30img from "../img/min301024.png";
import min60img from "../img/min601024.png";
import "./ClockControlBtn.css";

const ClockControlBtn = () => {
  const [playWorkStatus, setPlayWorkStatus] = useState("STOPPED");
  const [playRestStatus, setPlayRestStatus] = useState("STOPPED");
  const [playEndStatus, setPlayEndStatus] = useState("STOPPED");
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
    vol,
  } = useMainContext();
  const timeoutRef = useRef(null);
  const isFirstLoadOrResume = useCallback(() => sec === null, [sec]);
  const isSecZero = useCallback(() => sec === 0, [sec]);
  const handleReset = useCallback(() => {
    setIsStarted(false);
    setIsPaused(false);
    setSec(null);
    setCurrentTask("");
    setCurrentStatus(STATUS.DEFAULT);
    setPlayWorkStatus("STOPPED");
    setPlayRestStatus("STOPPED");
    setPlayEndStatus("PLAYING");
    clearTimeout(timeoutRef.current);
  }, [
    setIsStarted,
    setIsPaused,
    setSec,
    setCurrentTask,
    setCurrentStatus,
    setPlayWorkStatus,
    setPlayRestStatus,
  ]);
  const MIN5 = 5;
  const MIN10 = 1;
  const MIN25 = 25 * 60;
  const MIN50 = 1;

  useEffect(() => {
    if (isStarted) {
      if (isFirstLoadOrResume()) {
        if (currentMode === MODE.MIN30) {
          setCurrentStatus(STATUS.WORK);
          setPlayWorkStatus("PLAYING");
          setSec(MIN25);
        }
        if (currentMode === MODE.MIN60) {
          setCurrentStatus(STATUS.WORK);
          setPlayWorkStatus("PLAYING");
          setSec(MIN50);
        }
        return;
      } else if (isSecZero()) {
        setPlayEndStatus("PLAYING");
        if (currentStatus === STATUS.WORK) {
          if (currentMode === MODE.MIN30) {
            setCurrentStatus(STATUS.BREAK);
            setPlayWorkStatus("STOPPED");
            setPlayRestStatus("PLAYING");
            setSec(MIN5);
          } else if (currentMode === MODE.MIN60) {
            setCurrentStatus(STATUS.BREAK);
            setPlayWorkStatus("STOPPED");
            setPlayRestStatus("PLAYING");
            setSec(MIN10);
          }
        } else if (currentStatus === STATUS.BREAK) {
          setTaskArr([
            ...taskArr,
            {
              task: currentTask,
              mode: currentMode,
              time: new Date().getTime(),
            },
          ]);
          // setPomoNum(pomoNum + currentMode);
          handleReset();
        }
        return;
      }
      if (isPaused) {
        setPlayWorkStatus("PAUSED");
        setPlayRestStatus("PAUSED");
        clearTimeout(timeoutRef.current);
        return;
      } else if (!isPaused && currentStatus === STATUS.WORK)
        setPlayWorkStatus("PLAYING");
      else if (!isPaused && currentStatus === STATUS.BREAK)
        setPlayRestStatus("PLAYING");
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
    isSecZero,
    isFirstLoadOrResume,
    setCurrentMode,
    setCurrentStatus,
    setSec,
    setTaskArr,
    taskArr,
    setPlayWorkStatus,
    setPlayRestStatus,
  ]);

  return (
    <div className="clock-control-btn-comp">
      <Sound url={work} volume={vol} playStatus={playWorkStatus} />
      <Sound url={rest} volume={vol} playStatus={playRestStatus} />
      <Sound
        url={end}
        volume={vol}
        playStatus={playEndStatus}
        onFinishedPlaying={() => setPlayEndStatus("STOPPED")}
      />
      {isStarted && isPaused && (
        <button
          className="resume-btn btn"
          onClick={() => {
            setIsPaused(false);
          }}
        >
          Resume
        </button>
      )}
      {isStarted && !isPaused && (
        <button
          className="pause-btn btn"
          onClick={() => {
            setIsPaused(true);
          }}
        >
          Pause
        </button>
      )}
      {isStarted && (
        <button
          className="reset-btn btn"
          onClick={() => {
            handleReset();
          }}
        >
          Reset
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

export default ClockControlBtn;
