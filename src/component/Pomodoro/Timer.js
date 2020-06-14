import React, { useState, useRef, useEffect } from "react";
import "./Timer.css";
import Clock from "./Clock";

const Timer = () => {
  const [sec, setSec] = useState(null);
  const [startToggle, setStartToggle] = useState(false);
  const [pauseToggle, setPauseToggle] = useState(false);
  const [timeToggle, setTimeToggle] = useState(true);
  const [restToggle, setRestToggle] = useState(false);
  const [task, setTask] = useState("");
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (sec === null) return;
    if (sec === 0) {
      if (restToggle) {
        if (timeToggle) setSec(5 * 60);
        else setSec(10 * 60);
        setRestToggle(false);
      } else {
        clearTimeout(timeoutRef.current);
        setStartToggle(false);
        return;
      }
    }
    if (!startToggle) return;
    if (!pauseToggle) {
      timeoutRef.current = setTimeout(() => {
        setSec(sec - 1);
      }, 1000);
    }
  }, [sec, pauseToggle, startToggle]);

  const handleStart = () => {
    setStartToggle(true);
    setRestToggle(true);
    if (timeToggle) setSec(5);
    else setSec(50 * 60);
  };

  return (
    <>
      <Clock
        sec={sec}
        pauseToggle={pauseToggle}
        startToggle={startToggle}
        task={task}
      />
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
            clearTimeout(timeoutRef.current);
          }}
        >
          pause
        </button>
      )}
      {startToggle && (
        <button
          className="reset-btn btn"
          onClick={() => {
            setStartToggle(false);
            setPauseToggle(false);
            setSec(0);
            setTask("");
          }}
        >
          reset
        </button>
      )}
      {!startToggle && (
        <>
          <button className="start-btn btn" onClick={handleStart}>
            Start
          </button>
          <button
            className="thirty-btn"
            onClick={() => {
              setTimeToggle(true);
            }}
          >
            30
          </button>
          <button
            className="sixty-btn btn"
            onClick={() => {
              setTimeToggle(false);
            }}
          >
            60
          </button>
          <br />
          <input
            placeholder="할 일 ▶ Enter / Start"
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.keyCode === 13) handleStart();
            }}
          ></input>
        </>
      )}
    </>
  );
};

export default Timer;
