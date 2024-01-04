import React from "react";
import CollapseList from "../components/CollapseList";

function Hotels() {
  return (
    <div>
      <h1 className="borderBottom">ГОТЕЛІ</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <CollapseList title="hello" description="some description" />
        </div>
        <div>Some content</div>
      </div>
    </div>
  );
}

export default Hotels;
