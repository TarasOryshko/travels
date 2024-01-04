import React, { useState } from "react";

function CollapseList({ title, description }) {
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
    <div>
      <div style={{ background: "green" }} className="flex between">
        <h2>{title}</h2>
        <div onClick={Open}>
          <svg
            style={rot}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12.0001 15.0003L7.75708 10.7573L9.17208 9.34326L12.0001 12.1723L14.8281 9.34326L16.2431 10.7573L12.0001 15.0003Z"
              fill="#322E29"
            />
          </svg>
        </div>
      </div>
      <div style={showBlock}>{description}</div>
    </div>
  );
}

export default CollapseList;
