import React, { useState, useRef, useEffect } from "react";
import { timeStringFromSeconds } from "../../util";
import "./Timer.css";
import Clock from "./Clock";

const Timer = () => {
  const [sec, setSec] = useState(null);
  const [isGoing, setIsGoing] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [resumeToggle, setResumeToggle] = useState(false);

  const timeoutRef = useRef(null);
  useEffect(() => {
    if (sec === null) return;

    if (sec === 0) {
      clearTimeout(timeoutRef.current);
      setIsGoing(false);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setSec(sec - 1);
    }, 1000);
  }, [sec, resumeToggle]);

  const handleStart = (seconds) => {
    setIsGoing(true);
    setSec(seconds);
  };

  const handlePause = () => {
    clearTimeout(timeoutRef.current);
  };
  const handleReset = () => {
    setSec(0);
  };
  return (
    <>
      <Clock sec={sec} isPaused={isPaused} />
      <div>{timeStringFromSeconds(sec)}</div>
      {isGoing && isPaused && (
        <button
          className="resume-btn btn"
          onClick={() => {
            handleStart(sec);
            setResumeToggle(!resumeToggle);
            setIsPaused(false);
            console.log(isPaused);
          }}
        >
          resume
        </button>
      )}
      {isGoing && !isPaused && (
        <button
          className="pause-btn btn"
          onClick={() => {
            handlePause();
            setIsPaused(true);
            console.log(isPaused);
          }}
        >
          pause
        </button>
      )}
      {isGoing && (
        <button
          className="reset-btn btn"
          onClick={() => {
            handleReset();
            setIsGoing(false);
            setIsPaused(false);
          }}
        >
          reset
        </button>
      )}
      {!isGoing && (
        <>
          <button
            className="five-btn"
            onClick={() => {
              handleStart(5 * 60);
              console.log(isPaused);
            }}
          >
            05:00
          </button>
          <button
            className="twenty-five-btn"
            onClick={() => {
              handleStart(25 * 60);
            }}
          >
            25:00
          </button>
        </>
      )}
    </>
  );
};

export default Timer;
