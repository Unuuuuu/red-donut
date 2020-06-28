export const getGroupedTasksByDate = (tasks) => {
  let dateArr = [];
  for (let i = 0; i < tasks.length; i++) {
    if (!dateArr.includes(new Date(tasks[i].time).toLocaleDateString()))
      dateArr = [...dateArr, new Date(tasks[i].time).toLocaleDateString()];
  }
  const groupedTasksByDate = dateArr.map((time) =>
    tasks.filter((task) => new Date(task.time).toLocaleDateString() === time)
  );
  return groupedTasksByDate;
};
