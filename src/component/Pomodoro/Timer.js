import React, { useState, useRef, useEffect } from "react";
import "./Timer.css";
import Clock from "./Clock";

const Timer = () => {
  const [sec, setSec] = useState(null);
  const [startToggle, setStartToggle] = useState(false);
  const [pauseResumeToggle, setPauseResumeToggle] = useState(false);
  const [resetToggle, setResetToggle] = useState(false);
  const [timeToggle, setTimeToggle] = useState(true);
  const [task, setTask] = useState("");
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (startToggle) {
      setResetToggle(false);
      if (timeToggle) setSec(25 * 60);
      else setSec(50 * 60);
    }
  }, [startToggle]);

  useEffect(() => {
    if (pauseResumeToggle) {
      clearTimeout(timeoutRef.current);
    } else {
    }
  }, [pauseResumeToggle]);

  useEffect(() => {
    if (resetToggle) {
      setStartToggle(false);
      clearTimeout(timeoutRef.current);
    }
  }, [resetToggle]);

  useEffect(() => {
    if ((sec && startToggle) || !pauseResumeToggle)
      timeoutRef.current = setTimeout(() => {
        setSec(sec - 1);
      }, 1000);
    if (pauseResumeToggle) {
      clearTimeout(timeoutRef.current);
    }
  }, [sec, pauseResumeToggle]);

  return (
    <>
      <Clock
        sec={sec}
        startToggle={startToggle}
        pauseResumeToggle={pauseResumeToggle}
        timeToggle={timeToggle}
        task={task}
      />
      <br />
      {startToggle && pauseResumeToggle && (
        <button
          className="resume-btn btn"
          onClick={() => {
            setPauseResumeToggle(false);
          }}
        >
          resume
        </button>
      )}
      {startToggle && !pauseResumeToggle && (
        <button
          className="pause-btn btn"
          onClick={() => {
            setPauseResumeToggle(true);
          }}
        >
          pause
        </button>
      )}
      {startToggle && (
        <button
          className="reset-btn btn"
          onClick={() => {
            setResetToggle(true);
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
              if (e.keyCode === 13) setStartToggle(true);
            }}
          ></input>
        </>
      )}
    </>
  );
};

export default Timer;
