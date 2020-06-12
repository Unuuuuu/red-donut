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
  const ref = useRef();
  const sec = props.sec;
  const pauseToggle = props.pauseToggle;

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

    const drawArc = (x, y, radius, start, end, clockwise) => {
      ctx.beginPath();
      ctx.arc(x, y, radius, start, end, clockwise);
    };

    const drawCircle = (
      x,
      y,
      radius,
      start,
      end,
      clockwise,
      color,
      type,
      thickness
    ) => {
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
    };

    const drawText = (text, x, y, color, size) => {
      ctx.font = `${size} "Arial"`;
      ctx.fillStyle = color;
      ctx.fillText(text, x, y);
    };

    const drawLine = (x, y, x1, y1) => {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x1, y1);
      ctx.strokeStyle = "white";
      ctx.lineWidth = radius / 120;
      ctx.stroke();
    };

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2;
    const threePIByTwo = (3 * Math.PI) / 2;
    const l = (Math.PI * sec) / 1800;
    const sin30 = Math.sin(Math.PI / 6);
    const cos30 = Math.cos(Math.PI / 6);

    const handleLoad = () => {
      drawCircle(
        centerX,
        centerY,
        radius - radius / 4,
        0,
        Math.PI * 2,
        true,
        "#C0C0C0",
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
      drawLine(centerX, 0, centerX, radius / 6);
      drawLine(centerX * 2, centerY, centerX * 2 - radius / 6, centerY);
      drawLine(centerX, centerY * 2, centerX, centerY * 2 - radius / 6);
      drawLine(0, centerY, radius / 6, centerY);
      drawLine(
        centerX + radius * sin30,
        centerY + radius * cos30,
        centerX + radius * sin30 - (radius / 12) * sin30,
        centerY + radius * cos30 - (radius / 12) * cos30
      );
      drawLine(
        centerX - radius * sin30,
        centerY - radius * cos30,
        centerX - radius * sin30 + (radius / 12) * sin30,
        centerY - radius * cos30 + (radius / 12) * cos30
      );
      drawLine(
        centerX - radius * sin30,
        centerY + radius * cos30,
        centerX - radius * sin30 + (radius / 12) * sin30,
        centerY + radius * cos30 - (radius / 12) * cos30
      );
      drawLine(
        centerX + radius * sin30,
        centerY - radius * cos30,
        centerX + radius * sin30 - (radius / 12) * sin30,
        centerY - radius * cos30 + (radius / 12) * cos30
      );
      drawLine(
        centerX + radius * cos30,
        centerY - radius * sin30,
        centerX + radius * cos30 - (radius / 12) * cos30,
        centerY - radius * sin30 + (radius / 12) * sin30
      );
      drawLine(
        centerX + radius * cos30,
        centerY + radius * sin30,
        centerX + radius * cos30 - (radius / 12) * cos30,
        centerY + radius * sin30 - (radius / 12) * sin30
      );
      drawLine(
        centerX - radius * cos30,
        centerY - radius * sin30,
        centerX - radius * cos30 + (radius / 12) * cos30,
        centerY - radius * sin30 + (radius / 12) * sin30
      );
      drawLine(
        centerX - radius * cos30,
        centerY + radius * sin30,
        centerX - radius * cos30 + (radius / 12) * cos30,
        centerY + radius * sin30 - (radius / 12) * sin30
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
        "#C0C0C0",
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
      drawLine(centerX, 0, centerX, radius / 6);
      drawLine(centerX * 2, centerY, centerX * 2 - radius / 6, centerY);
      drawLine(centerX, centerY * 2, centerX, centerY * 2 - radius / 6);
      drawLine(0, centerY, radius / 6, centerY);
      drawLine(
        centerX + radius * sin30,
        centerY + radius * cos30,
        centerX + radius * sin30 - (radius / 12) * sin30,
        centerY + radius * cos30 - (radius / 12) * cos30
      );
      drawLine(
        centerX - radius * sin30,
        centerY - radius * cos30,
        centerX - radius * sin30 + (radius / 12) * sin30,
        centerY - radius * cos30 + (radius / 12) * cos30
      );
      drawLine(
        centerX - radius * sin30,
        centerY + radius * cos30,
        centerX - radius * sin30 + (radius / 12) * sin30,
        centerY + radius * cos30 - (radius / 12) * cos30
      );
      drawLine(
        centerX + radius * sin30,
        centerY - radius * cos30,
        centerX + radius * sin30 - (radius / 12) * sin30,
        centerY - radius * cos30 + (radius / 12) * cos30
      );
      drawLine(
        centerX + radius * cos30,
        centerY - radius * sin30,
        centerX + radius * cos30 - (radius / 12) * cos30,
        centerY - radius * sin30 + (radius / 12) * sin30
      );
      drawLine(
        centerX + radius * cos30,
        centerY + radius * sin30,
        centerX + radius * cos30 - (radius / 12) * cos30,
        centerY + radius * sin30 - (radius / 12) * sin30
      );
      drawLine(
        centerX - radius * cos30,
        centerY - radius * sin30,
        centerX - radius * cos30 + (radius / 12) * cos30,
        centerY - radius * sin30 + (radius / 12) * sin30
      );
      drawLine(
        centerX - radius * cos30,
        centerY + radius * sin30,
        centerX - radius * cos30 + (radius / 12) * cos30,
        centerY + radius * sin30 - (radius / 12) * sin30
      );
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