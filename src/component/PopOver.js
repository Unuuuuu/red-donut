import React from "react";
import "./PopOver.css";

function PopOver(props) {
  return (
    <>
      {props.isMouseOver && (
        <div className="pop-over">
          {props.date.year}. {props.date.month + 1}
        </div>
      )}
    </>
  );
}

export default PopOver;
