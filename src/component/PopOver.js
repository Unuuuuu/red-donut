import React from "react";
import numWords from "num-words";
import ntdmn from "number-to-date-month-name";
import "./PopOver.css";

function PopOver(props) {
  return (
    <>
      {props.isMouseOver === props.date.date && props.mode !== 0 && (
        <div className="pop-over">
          <div className="top">
            <span style={{ color: "white" }}>{numWords(props.mode)}</span>
            <span role="img" aria-label="donut" style={{ fontSize: "13px" }}>
              🍩
            </span>
          </div>
          <div className="bottom">
            <span style={{ color: "silver" }}>
              on {ntdmn.toMonth(props.date.month + 1, "s")} {props.date.date}, {props.date.year}
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default PopOver;
