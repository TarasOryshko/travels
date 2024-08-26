import React, { useState } from "react";
import search from "../assets/svg/search.svg";
import logo from "../assets/svg/logo.svg";
import { Link } from "react-router-dom";
import { navList } from "../data/countries";

function Header({ login, setLogin, setShowBurger }) {
  const [selectPage, setSelectPage] = useState(null);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "#fff",
      }}
    >
      <div
        className="headerFlex"
        style={{ justifyContent: "space-between", flexWrap: "wrap" }}
      >
        <div>
          <Link to="/" onClick={() => setSelectPage(0)}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="headerFlex" style={{ flexWrap: "wrap" }}>
          <nav className="headerFlex" style={{ alignItems: "center" }}>
            {navList.map((item, index) => (
              <li
                key={item.title}
                style={{ color: selectPage === index && "red" }}
              >
                <Link to={item.path} onClick={() => setSelectPage(index)}>
                  {item.title}
                </Link>
              </li>
            ))}
          </nav>
          <div
            onClick={() => setShowBurger(true)}
            className="btnHeader btnBurger"
          >
            <div className="burger">
              <span></span>
            </div>
          </div>
          <div className="btnHeader">
            <Link>
              <img src={search} alt="search" />
            </Link>
          </div>
          <div className="btnHeader btnSing">
            <button
              style={{ backgroundColor: login && "darkblue" }}
              onClick={() => setLogin(true)}
            >
              Увійти
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header;
