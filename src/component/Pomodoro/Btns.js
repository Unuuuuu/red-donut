import React, { useRef, useEffect } from "react";
import { useMainContext } from "./Main";
import min30img from "../../img/min301024.png";
import min60img from "../../img/min601024.png";

const Btns = () => {
  const {
    sec,
    setSec,
    startToggle,
    setStartToggle,
    pauseToggle,
    setPauseToggle,
    min30,
    setMin30,
    min60,
    setMin60,
    mode1,
    setMode1,
    mode2,
    setMode2,
    task,
    setTask,
    taskArr,
    setTaskArr,
  } = useMainContext();
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (startToggle) {
      if (sec === null) {
        if (min30) {
          setMode1(true);
          setSec(25 * 60);
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
            setSec(5 * 60);
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
    <div className="Btns">
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
            className="min30-btn btn"
            onClick={() => {
              setMin30(true);
              setMin60(false);
            }}
          >
            <img src={min30img} width="70px" />
          </button>
          <button
            className="min60-btn btn"
            onClick={() => {
              setMin30(false);
              setMin60(true);
            }}
          >
            <img src={min60img} width="70px" />
          </button>
        </>
      )}
    </div>
  );
};

export default Btns;
