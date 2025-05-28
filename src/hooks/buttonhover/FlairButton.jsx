import React, { useRef } from "react";
import "./FlairButton.css";

const FlairButton = ({ text = "Hover Me" }) => {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const button = btnRef.current;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    button.style.setProperty("--x", `${x}px`);
    button.style.setProperty("--y", `${y}px`);
  };

  return (
    <button className="flair-button" ref={btnRef} onMouseMove={handleMouseMove}>
      <span className="flair" />
      {text}
    </button>
  );
};

export default FlairButton;
