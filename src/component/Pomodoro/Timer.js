import React, { useState, useRef, useEffect } from "react";
import { timeStringFromSeconds } from "../../util";
import "./Timer.css";
import Clock from "./Clock";

const Timer = () => {
  const [sec, setSec] = useState(null);
  const [countToggle, setCountToggle] = useState(false);
  const [pauseToggle, setPauseToggle] = useState(false);
  const [resumeToggle, setResumeToggle] = useState(false);
  const [timeToggle, setTimeToggle] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (sec === null) return;
    if (sec === 0) {
      clearTimeout(timeoutRef.current);
      setCountToggle(false);
      return;
    }
    timeoutRef.current = setTimeout(() => {
      setSec(sec - 1);
    }, 1000);
  }, [sec, resumeToggle]);

  const handleStart = () => {
    setCountToggle(true);
    if (!timeToggle) setSec(25 * 60);
    else setSec(50 * 60);
  };

  const handlePause = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleReset = () => {
    setSec(0);
  };

  return (
    <>
      <Clock sec={sec} pauseToggle={pauseToggle} />
      <div>{timeStringFromSeconds(sec)}</div>
      {countToggle && pauseToggle && (
        <button
          className="resume-btn btn"
          onClick={() => {
            setResumeToggle(!resumeToggle);
            setPauseToggle(false);
            console.log(pauseToggle);
          }}
        >
          resume
        </button>
      )}
      {countToggle && !pauseToggle && (
        <button
          className="pause-btn btn"
          onClick={() => {
            handlePause();
            setPauseToggle(true);
          }}
        >
          pause
        </button>
      )}
      {countToggle && (
        <button
          className="reset-btn btn"
          onClick={() => {
            handleReset();
            setCountToggle(false);
            setPauseToggle(false);
          }}
        >
          reset
        </button>
      )}
      {!countToggle && (
        <>
          <button className="start-btn btn" onClick={handleStart}>
            start
          </button>
          <button
            className="thirty-btn"
            onClick={() => {
              setTimeToggle(false);
            }}
          >
            30
          </button>
          <button
            className="sixty-btn btn"
            onClick={() => {
              setTimeToggle(true);
            }}
          >
            60
          </button>
        </>
      )}
    </>
  );
};

export default Timer;
