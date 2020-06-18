import React, { useRef, useEffect } from "react";
import { useMainContext } from "./Main";
import {
  getPixelRatio,
  drawClock,
  drawClockLine,
  drawGauge,
  printText,
} from "../util";
import "./Clock.css";

const Clock = () => {
  const { sec, isStarted, isPaused, currentStatus } = useMainContext();
  const ref = useRef();

  useEffect(() => {
    let canvas = ref.current;
    let ctx = canvas.getContext("2d");
    let requestId;
    let ratio = getPixelRatio(ctx);
    let width = getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    let height = getComputedStyle(canvas)
      .getPropertyValue("height")
      .slice(0, -2);
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2;
    const threePIByTwo = (3 * Math.PI) / 2;
    const l = (Math.PI * sec) / 1800;
    const sin30 = Math.sin(Math.PI / 6);
    const cos30 = Math.cos(Math.PI / 6);

    const drawOption = {
      centerX,
      centerY,
      radius,
    };
    const contextOption = {
      sec,
      isStarted,
      isPaused,
    };
    const triOption = {
      sin30,
      cos30,
    };
    const drawGaugeOption = {
      threePIByTwo,
      l,
      currentStatus,
    };
    printText(ctx, drawOption, contextOption);
    drawClock(ctx, drawOption);
    const drawGaugeAndRequestAnimationFrame = () => {
      drawGauge(ctx, drawOption, drawGaugeOption);
      requestId = requestAnimationFrame(drawGaugeAndRequestAnimationFrame);
    };
    drawGaugeAndRequestAnimationFrame();
    drawClockLine(ctx, drawOption, triOption);
    ctx.globalCompositeOperation = "destination-over";

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [sec, isStarted, isPaused, currentStatus]);

  return (
    <div className="clock-comp">
      <canvas ref={ref} style={{ width: "450px", height: "450px" }} />
    </div>
  );
};

export default Clock;
