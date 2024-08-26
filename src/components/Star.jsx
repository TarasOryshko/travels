import React from "react";
import starSvg from "../assets/svg/Star-Filled.svg";

const Star = () => {
  return (
    <img
      src={starSvg}
      alt="star"
      style={{ width: "24px", height: "24px", marginRight: "2px" }}
    />
  );
};

export default Star;
