import React from "react";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex" style={{ justifyContent: "center", gap: 5 }}>
        {pageNumbers.map((number) => (
          <li
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              width: 50,
              height: 50,
              border: "2px solid green",
              borderRadius: "50%",
              cursor: "pointer",
            }}
            key={number}
            onClick={(e) => paginate(number, e)}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
