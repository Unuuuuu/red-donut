import { STATUS } from "../component/Main";

export const pad = (num) => {
  if (num < 10) return `0${num}`;
  else return num;
};

const timeStringFromSeconds = (secs) => {
  let minutes = secs !== null ? Math.floor(secs / 60) : 0;
  let seconds = secs !== null ? Math.ceil(secs % 60) : 0;
  return `${pad(minutes)}:${pad(seconds)}`;
};

export const getPixelRatio = (context) => {
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

const drawArc = (ctx, x, y, radius, start, end, clockwise) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, start, end, clockwise);
};

const drawCircle = (
  ctx,
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
    drawArc(ctx, x, y, radius, start, end, clockwise);
    ctx.fill();
  } else if (type === "stroke") {
    ctx.strokeStyle = color;
    ctx.lineWidth = thickness;
    drawArc(ctx, x, y, radius, start, end, clockwise);
    ctx.stroke();
  }
};

const drawText = (ctx, text, x, y, color, size) => {
  ctx.font = `${size} "Nanum Gothic Coding", monospace`;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};

const drawLine = (ctx, x, y, x1, y1, radius) => {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x1, y1);
  ctx.strokeStyle = "white";
  ctx.lineWidth = radius / 120;
  ctx.stroke();
};

export const drawClock = (ctx, { centerX, centerY, radius }) => {
  drawCircle(
    ctx,
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
};

export const printText = (
  ctx,
  { centerX, centerY, radius },
  { sec, isStarted, isPaused }
) => {
  if (isStarted) {
    if (isPaused) {
      drawText(
        ctx,
        "Paused",
        centerX - radius / 3.3,
        centerY + radius / 16,
        "black",
        `${radius / 5}px`
      );
    } else {
      drawText(
        ctx,
        timeStringFromSeconds(sec),
        centerX - radius / 4,
        centerY + radius / 16,
        "black",
        `${radius / 5}px`
      );
    }
  } else if (!isStarted)
    drawText(
      ctx,
      "Welcome!",
      centerX - radius / 2.6,
      centerY + radius / 16,
      "black",
      `${radius / 5}px`
    );
};
export const drawClockLine = (
  ctx,
  { centerX, centerY, radius },
  { sin30, cos30 }
) => {
  drawLine(ctx, centerX, 0, centerX, radius / 6, radius);
  drawLine(
    ctx,
    centerX * 2,
    centerY,
    centerX * 2 - radius / 6,
    centerY,
    radius
  );
  drawLine(
    ctx,
    centerX,
    centerY * 2,
    centerX,
    centerY * 2 - radius / 6,
    radius
  );
  drawLine(ctx, 0, centerY, radius / 6, centerY, radius);
  drawLine(
    ctx,
    centerX + radius * sin30,
    centerY + radius * cos30,
    centerX + radius * sin30 - (radius / 12) * sin30,
    centerY + radius * cos30 - (radius / 12) * cos30,
    radius
  );
  drawLine(
    ctx,
    centerX - radius * sin30,
    centerY - radius * cos30,
    centerX - radius * sin30 + (radius / 12) * sin30,
    centerY - radius * cos30 + (radius / 12) * cos30,
    radius
  );
  drawLine(
    ctx,
    centerX - radius * sin30,
    centerY + radius * cos30,
    centerX - radius * sin30 + (radius / 12) * sin30,
    centerY + radius * cos30 - (radius / 12) * cos30,
    radius
  );
  drawLine(
    ctx,
    centerX + radius * sin30,
    centerY - radius * cos30,
    centerX + radius * sin30 - (radius / 12) * sin30,
    centerY - radius * cos30 + (radius / 12) * cos30,
    radius
  );
  drawLine(
    ctx,
    centerX + radius * cos30,
    centerY - radius * sin30,
    centerX + radius * cos30 - (radius / 12) * cos30,
    centerY - radius * sin30 + (radius / 12) * sin30,
    radius
  );
  drawLine(
    ctx,
    centerX + radius * cos30,
    centerY + radius * sin30,
    centerX + radius * cos30 - (radius / 12) * cos30,
    centerY + radius * sin30 - (radius / 12) * sin30,
    radius
  );
  drawLine(
    ctx,
    centerX - radius * cos30,
    centerY - radius * sin30,
    centerX - radius * cos30 + (radius / 12) * cos30,
    centerY - radius * sin30 + (radius / 12) * sin30,
    radius
  );
  drawLine(
    ctx,
    centerX - radius * cos30,
    centerY + radius * sin30,
    centerX - radius * cos30 + (radius / 12) * cos30,
    centerY + radius * sin30 - (radius / 12) * sin30,
    radius
  );
};

export const drawGauge = (
  ctx,
  { centerX, centerY, radius },
  { threePIByTwo, l, currentStatus }
) => {
  drawCircle(
    ctx,
    centerX,
    centerY,
    radius - radius / 4,
    threePIByTwo + l,
    threePIByTwo,
    true,
    currentStatus === STATUS.WORK ? "#e58989" : "#22cc71",
    "stroke",
    radius / 2
  );
};
