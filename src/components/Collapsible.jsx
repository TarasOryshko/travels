import React, { useState } from "react";
import Arrow from "../svg/arrowCollapse.svg";

function Collapsible({ title, children, size = 14, color, left }) {
  const [open, setOpen] = useState(false);
  const showBlock = {
    display: open ? "block" : "none",
  };
  const rot = {
    rotate: open ? "180deg" : "0deg",
    transition: "rotate .5s",
  };

  const Open = () => setOpen(!open);

  return (
    <div style={{ marginLeft: left }}>
      <div
        onClick={Open}
        className="flex between"
        style={{ cursor: "pointer" }}
      >
        <div
          style={{
            fontSize: size,
            color: color,
            textTransform: "uppercase",
            lineHeight: "140%",
            padding: "24px 0 ",
          }}
        >
          {title}
        </div>
        <div style={rot}>
          <img src={Arrow} alt="arrow" />
        </div>
      </div>
      <hr />
      <div className="allMarginŸ`" style={showBlock}>
        {children}
      </div>
    </div>
  );
}

export default Collapsible;
