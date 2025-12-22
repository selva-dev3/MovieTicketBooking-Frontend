import React from "react";

function BlurCircle({
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto",
}) {
  return (
    <div
      style={{ top, left, right, bottom }}
      className="absolute -z-50 h-58 w-58 rounded-full bg-[#f84565]/30 blur-3xl aspect-square"
    >
      </div>
  );
}

export default BlurCircle;
