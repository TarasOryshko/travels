import React from "react";
import Star from "./Star";

function ListOfCountries({ countries }) {
  function StarRating({ num }) {
    const stars = [];

    for (let i = 1; i <= num; i++) {
      stars.push(<Star key={i} />);
    }
    return <div style={{ display: "flex" }}>{stars}</div>;
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 32,
        margin: "25px 0 0 25px",
      }}
    >
      {countries.map((i) => (
        <div key={i.id}>
          <div style={{ height: 228, objectFit: "cover", marginBottom: 12 }}>
            <img src={i.src} alt="img" />
          </div>
          <div style={{ textTransform: "uppercase" }}>
            {i.country}, {i.city},{i.village}
          </div>
          <h2 style={{ textTransform: "uppercase", margin: "12px 0" }}>
            {i.title}
          </h2>

          <StarRating num={i.star} />
          <hr style={{ margin: "12px 0" }} />
          <div>
            <p>{i.description}</p>
          </div>
        </div>
      ))}

      <StarRating num={2} />
    </div>
  );
}

export default ListOfCountries;
