import React from "react";

function HomeNews({ data, title, description, borderr, showBtn = false }) {
  const show = showBtn ? "block" : "none";
  return (
    <div className={borderr}>
      <data style={{ color: "gold", fontStyle: "italic" }}>{data}</data>
      <h2
        style={{
          padding: "12px 0 ",
          textTransform: "uppercase",
          textWrap: "balance",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: 5,
          justifyContent: "space-between",
        }}
      >
        <div>
          <p style={{ marginBottom: 26 }}>{description}</p>
        </div>
        <div style={{ display: show }}>
          <button>Детальніше</button>
        </div>
      </div>
    </div>
  );
}

export default HomeNews;
