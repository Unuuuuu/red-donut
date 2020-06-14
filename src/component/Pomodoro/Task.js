import React from "react";

const Task = (props) => {
  const taskArr = props.taskArr;
  return (
    <>
      {console.log(taskArr)}
      {taskArr.map((v) => (
        <p>{v}</p>
      ))}
    </>
  );
};

export default Task;
