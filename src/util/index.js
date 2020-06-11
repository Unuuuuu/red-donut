export const pad = (num) => {
  if (num < 10) return `0${num}`;
  else return num;
};

export const timeStringFromSeconds = (secs) => {
  let minutes = secs !== null ? Math.floor(secs / 60) : 0;
  let seconds = secs !== null ? Math.ceil(secs % 60) : 0;
  return `${pad(minutes)}:${pad(seconds)}`;
};
