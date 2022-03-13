import React from "react";
import ReactInputPosition, {
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
} from "react-input-position";
import "./cursor.css";

const Cursor = ({ active, x, y }) => {
  console.log(x);
  const show = active ? "show" : "";
  const left = x - 200;
  const top = y - 200;
  return (
    <img
      src="sing.png"
      className={`cursor ${show}`}
      style={{ position: "relative", left: `${left}px`, top: `${top}px` }}
    />
  );
};

const Capture = ({ active, activePosition: { x, y } }) => {
  return (
    <div className="capture">
      <Cursor x={x} y={y} active={active} />
    </div>
  );
};

const screen = () => {
  return (
    <div className="screen">
      <ReactInputPosition
        mouseActivationMethod={MOUSE_ACTIVATION.CLICK}
        touchActivationMethod={TOUCH_ACTIVATION.TAP}
        trackItemPosition
        itemPositionLimitBySize
        centerItemOnActivatePos
        cursorStyle={"none"}
        style={{ position: "relative", overflow: "hidden" }}
      >
        <Capture />
      </ReactInputPosition>
    </div>
  );
};

export default screen;
