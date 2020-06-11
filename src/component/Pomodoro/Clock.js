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
//   //       drawArc(x, y, radius, start, end, clockwise);
//   //       ctx.stroke();
//   //     }
//   //   };
//   //     const radS = 0.006 * (sec * 1000);
//   //     ctx.fillStyle = "rgb(200,0,0)";
//   //     ctx.fillRect(10, 10, 50, 50);

//   //     ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
//   //     ctx.fillRect(30, 30, 50, 50);
//   //     // drawCircle(
//   //     //   centerX,
//   //     //   centerY,
//   //     //   360,
//   //     //   threePIByTwo,
//   //     //   rad(radS) + threePIByTwo,
//   //     //   false,
//   //     //   "black",
//   //     //   "stroke",
//   //     //   30
//   //     // );
//   //     window.requestAnimationFrame(draw);
//   const canvasRef = useRef(null);
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     init();
//   });
//   function init() {
//     canvas.width = document.documentElement.clientWidth - 35;
//     canvas.height = document.documentElement.clientHeight - 45;
//     window.requestAnimationFrame(draw);
//   }
//   return <canvas ref={canvasRef} class="canvas" width="150px" height="150px" />;
// };

// export default Clock;

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
  const isPaused = props.isPaused;

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
      if (isPaused) {
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
      // ctx.beginPath();
      // ctx.moveTo(centerX, 0);
      // ctx.lineTo(centerX, centerY);
      // ctx.lineTo(
      //   { centerX } + { radius } * Math.sin(theta),
      //   { radius } - { radius } * Math.cos(theta)
      // );
      // ctx.arc(
      //   centerX,
      //   centerY,
      //   radius - 11,
      //   threePIByTwo + l,
      //   threePIByTwo,
      //   true
      // );
      // ctx.fillStyle = "black";
      // ctx.fill();

      // ctx.beginPath();
      // ctx.moveTo(centerX, 8);
      // ctx.lineTo(centerX, centerY);
      // ctx.lineTo(centerX * 2, 400);
      // ctx.lineWidth = 8;
      // ctx.strokeStyle = "blue";
      // ctx.stroke();
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
  }, [sec, isPaused]);

  return <canvas ref={ref} style={{ width: "300px", height: "300px" }} />;
};

export default Clock;
