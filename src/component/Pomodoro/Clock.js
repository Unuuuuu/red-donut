// import React, { useEffect, useRef } from "react";

// const Clock = (props) => {
//   const sec = props.sec;
//   //   const canvas = document.querySelector(".canvas");
//   //   function draw(now) {
//   //     const centerX = canvas.width / 2;
//   //     const centerY = canvas.width / 2;
//   //     const threePIByTwo = (3 * Math.PI) / 2;

//   //     const rad = (deg) => {
//   //       return (Math.PI / 180) * deg;
//   //     };
//   //     const drawArc = (x, y, radius, start, end, clockwise) => {
//   //       ctx.beginPath();
//   //       ctx.arc(x, y, radius, start, end, clockwise);
//   //     };
//   //   const drawCircle = (
//   //     x,
//   //     y,
//   //     radius,
//   //     start,
//   //     end,
//   //     clockwise,
//   //     color,
//   //     type,
//   //     thickness
//   //   ) => {
//   //     if (type == "fill") {
//   //       ctx.fillStyle = color;
//   //       drawArc(x, y, radius, start, end, clockwise);
//   //       ctx.fill();
//   //     } else if (type == "stroke") {
//   //       ctx.strokeStyle = color;
//   //       ctx.lineWidth = thickness;
import React, { useRef, useEffect } from "react";
import { timeStringFromSeconds } from "../../util";

const getPixelRatio = (context) => {
  var backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;

  return (window.devicePixelRatio || 1) / backingStore;
};

const Clock = (props) => {
  let ref = useRef();
  const sec = props.sec;
  const pauseToggle = props.pauseToggle;

  useEffect(() => {
    let canvas = ref.current;
    let ctx = canvas.getContext("2d");

    let ratio = getPixelRatio(ctx);
    let width = getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    let height = getComputedStyle(canvas)
      .getPropertyValue("height")
      .slice(0, -2);

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    let requestId;
    function drawArc(x, y, radius, start, end, clockwise) {
      ctx.beginPath();
      ctx.arc(x, y, radius, start, end, clockwise);
    }
    function drawCircle(
      x,
      y,
      radius,
      start,
      end,
      clockwise,
      color,
      type,
      thickness
    ) {
      if (type === "fill") {
        ctx.fillStyle = color;
        drawArc(x, y, radius, start, end, clockwise);
        ctx.fill();
      } else if (type === "stroke") {
        ctx.strokeStyle = color;
        ctx.lineWidth = thickness;
        drawArc(x, y, radius, start, end, clockwise);
        ctx.stroke();
      }
    }
    function drawText(text, x, y, color, size) {
      ctx.font = `${size} "Arial"`;
      ctx.fillStyle = color;
      ctx.fillText(text, x, y);
    }
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2;
    const threePIByTwo = (3 * Math.PI) / 2;
    const l = (Math.PI * sec) / 1800;

    const handleLoad = () => {
      drawCircle(
        centerX,
        centerY,
        radius - radius / 4,
        0,
        Math.PI * 2,
        true,
        "#b2ada6",
        "stroke",
        radius / 2
      );
      drawText(
        "Welcome",
        centerX - radius / 2.5,
        centerY + radius / 16,
        "black",
        `${radius / 5}px`
      );
    };
    const handleCount = () => {
      drawCircle(
        centerX,
        centerY,
        radius - radius / 4,
        0,
        Math.PI * 2,
        true,
        "#b2ada6",
        "stroke",
        radius / 2
      );
      drawCircle(
        centerX,
        centerY,
        radius - radius / 4,
        threePIByTwo + l,
        threePIByTwo,
        true,
        "#e58989",
        "stroke",
        radius / 2
      );
      if (pauseToggle) {
        drawText(
          "Paused",
          centerX - radius / 3,
          centerY + radius / 16,
          "black",
          `${radius / 5}px`
        );
      } else {
        drawText(
          timeStringFromSeconds(sec),
          centerX - radius / 4,
          centerY + radius / 16,
          "black",
          `${radius / 5}px`
        );
      }
      requestId = requestAnimationFrame(handleCount);
    };
    if (sec === null || sec === 0) {
      return handleLoad();
    }
    if (sec !== 0) {
      handleCount();
    }
    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [sec, pauseToggle]);

  return <canvas ref={ref} style={{ width: "300px", height: "300px" }} />;
};

export default Clock;
