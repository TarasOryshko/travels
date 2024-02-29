import React from "react";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex" style={{ justifyContent: "center" }}>
        {pageNumbers.map((number) => (
          <li style={{ border: "2px solid green" }} key={number}>
            <a
              style={{ padding: 20, display: "block" }}
              onClick={(e) => paginate(number, e)}
              href="#"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
