import { useRef, useState } from "react";
import "./cursor.css";

const Cursor = ({ x, y }) => (
  <img
    src="duggee-hug.gif"
    className="cursor show"
    style={{
      position: "relative",
      width: "500px",
      height: "291px",
      left: `${x - 200}px`,
      top: `${y - 200}px`,
    }}
  />
);

const Screen = () => {
  const [pos, setPos] = useState(null);
  const containerRef = useRef(null);

  const update = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const start = (e) => {
    e.preventDefault();
    containerRef.current.setPointerCapture?.(e.pointerId);
    update(e);
  };

  const stop = () => setPos(null);

  return (
    <div
      className="screen"
      ref={containerRef}
      style={{ position: "relative", overflow: "hidden", cursor: "none" }}
      onPointerDown={start}
      onPointerMove={pos ? update : undefined}
      onPointerUp={stop}
      onPointerCancel={stop}
      onPointerLeave={stop}
    >
      {pos && <Cursor x={pos.x} y={pos.y} />}
    </div>
  );
};

export default Screen;
