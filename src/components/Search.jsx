// import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import search from "../assets/svg/search.svg";
import { useEffect } from "react";

function Search({
  placeholder,
  btn = "Знайти",
  showBtn = true,
  onSearchChange,
}) {
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const q = searchParams.get("q");

  const styles = {
    display: showBtn ? "block" : "none",
  };
  useEffect(() => {
    onSearchChange && onSearchChange(q);
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchParams(
      (prev) => {
        prev.set("q", value);
        return prev;
      },
      { replace: true }
    );
    onSearchChange(value);
  };

  return (
    <div className="search">
      <div>
        <img src={search} alt="search" />
      </div>
      <input
        onChange={handleChange}
        value={q}
        type="search"
        placeholder={placeholder}
      />
      <button style={styles}>{btn}</button>
    </div>
  );
}

export default Search;
