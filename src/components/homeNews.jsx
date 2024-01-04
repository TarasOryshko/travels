import React from "react";

function HomeNews({ data, title, description, borderr, showBtn = false }) {
  const show = showBtn ? "block" : "none";
  return (
    <div
      className={borderr}
      style={
        {
          // display: "flex",
          // flexShrink: 1,
          // flexDirection: "column",
          // alignItems: "start",
          // marginBottom: 20,
          // justifyContent: "start",
        }
      }
    >
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
          <description style={{ marginBottom: 26 }}>{description}</description>
        </div>
        <div style={{ display: show }}>
          <button>Детальніше</button>
        </div>
      </div>
    </div>
  );
}

export default HomeNews;
