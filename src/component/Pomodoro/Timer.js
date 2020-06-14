import React, { useState, useRef, useEffect } from "react";
import "./Timer.css";
import Clock from "./Clock";
import Task from "./Task";

const Timer = () => {
  const [sec, setSec] = useState(null);
  const [startToggle, setStartToggle] = useState(false);
  const [pauseToggle, setPauseToggle] = useState(false);
  const [min30, setMin30] = useState(true);
  const [min60, setMin60] = useState(false);
  const [mode1, setMode1] = useState(false);
  const [mode2, setMode2] = useState(false);
  const [task, setTask] = useState("");
  const [taskArr, setTaskArr] = useState([]);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (startToggle) {
      if (sec === null) {
        if (min30) {
          setMode1(true);
          setSec(1);
        }
        if (min60) {
          setMode1(true);
          setSec(50 * 60);
        }
        return;
      }
      if (sec === 0) {
        if (mode1) {
          if (min30) {
            setMode1(false);
            setMode2(true);
            setSec(2);
          }
          if (min60) {
            setMode1(false);
            setMode2(true);
            setSec(10 * 60);
          }
        }
        if (mode2) {
          setTaskArr([...taskArr, task]);
          handleReset();
        }
        return;
      }
      if (pauseToggle) {
        clearTimeout(timeoutRef.current);
        return;
      }
      timeoutRef.current = setTimeout(() => {
        setSec(sec - 1);
      }, 1000);
    }
  }, [sec, startToggle, pauseToggle]);

  const handleReset = () => {
    setStartToggle(false);
    setPauseToggle(false);
    setSec(null);
    setTask("");
    setMode1(false);
    setMode2(false);
    clearTimeout(timeoutRef.current);
  };

  return (
    <>
      <Clock
        sec={sec}
        pauseToggle={pauseToggle}
        startToggle={startToggle}
        mode1={mode1}
        mode2={mode2}
        task={task}
      />
      <Task taskArr={taskArr} />
      <br />
      {startToggle && pauseToggle && (
        <button
          className="resume-btn btn"
          onClick={() => {
            setPauseToggle(false);
          }}
        >
          resume
        </button>
      )}
      {startToggle && !pauseToggle && (
        <button
          className="pause-btn btn"
          onClick={() => {
            setPauseToggle(true);
          }}
        >
          pause
        </button>
      )}
      {startToggle && (
        <button
          className="reset-btn btn"
          onClick={() => {
            handleReset();
          }}
        >
          reset
        </button>
      )}
      {!startToggle && (
        <>
          <button
            className="start-btn btn"
            onClick={() => {
              setStartToggle(true);
            }}
          >
            Start
          </button>
          <button
            className="thirty-btn"
            onClick={() => {
              setMin30(true);
              setMin60(false);
            }}
          >
            30
          </button>
          <button
            className="sixty-btn btn"
            onClick={() => {
              setMin30(false);
              setMin60(true);
            }}
          >
            60
          </button>
          <br />
          <input
            placeholder="할 일 ▶ Enter / Start"
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.keyCode === 13) setStartToggle(true);
            }}
          ></input>
        </>
      )}
    </>
  );
};

export default Timer;
