// import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import search from "../assets/svg/search.svg";

function Search({
  placeholder,
  btn = "Знайти",
  showBtn = true,
  onSearchChange,
}) {
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const q = searchParams.get("q");

  // const [name, setName] = useState("");
  const styles = {
    display: showBtn ? "block" : "none",
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchParams(
      (prev) => {
        prev.set("q", value);
        return prev;
      },
      { replace: true }
    );
    onSearchChange(q);
    // setName(value);
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
