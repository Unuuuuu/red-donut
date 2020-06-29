export const chunk = (arr) => {
  let result = [];
  const num = 7;
  for (let i = 0; i < Math.ceil(arr.length / num); i++) {
    result.push(arr.slice(num * i, num * (i + 1)));
  }
  return result;
};

export const decideColor = (mode) => {
  if (mode === 1) return "#ff8585";
  else if (mode === 2) return "#ff7a7a";
  else if (mode === 3) return "#ff7070";
  else if (mode === 4) return "#ff6b6b";
  else if (mode === 5) return "#ff6161";
  else if (mode === 6) return "#ff5757";
  else if (mode === 7) return "#ff4d4d";
  else if (mode === 8) return "#ff4747";
  else if (mode === 9) return "#ff3d3d";
  else if (mode === 10) return "#ff3333";
  else if (mode === 11) return "#ff2929";
  else if (mode === 12) return "#ff1f1f";
  else if (mode === 13) return "#ff1a1a";
  else if (mode === 14) return "#ff0f0f";
  else if (mode >= 15) return "#ff0505";
};

const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

const FULL_DATES = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
export const getLastDateFromYearAndMonth = (year, month) => {
  if (month === 1 && isLeapYear(year)) return 29;
  return FULL_DATES[month];
};
