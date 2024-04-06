import React, { useState } from "react";
import search from "../assets/svg/search.svg";
import logo from "../assets/svg/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  const [selectPage, setSelectPage] = useState(null);
  const [login, setLogin] = useState(true);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 99,
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
            <li style={{ color: selectPage === 0 && "red" }}>
              <Link to="/" onClick={() => setSelectPage(0)}>
                Додому
              </Link>
            </li>
            <li style={{ color: selectPage === 1 && "red" }}>
              <Link to="/travels" onClick={() => setSelectPage(1)}>
                Подорожі
              </Link>
            </li>
            <li style={{ color: selectPage === 2 && "red" }}>
              <Link to="/hotels" onClick={() => setSelectPage(2)}>
                Готелі
              </Link>
            </li>
            <li style={{ color: selectPage === 3 && "red" }}>
              <Link to="/countries" onClick={() => setSelectPage(3)}>
                Країни
              </Link>
            </li>
          </nav>
          <div className="btnHeader">
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
            <button onClick={() => setLogin(true)}>Увійти</button>
          </div>
          {login && (
            <div className="absolute shadow-lg shadow-blue-800/50 p-6 left-[45%] top-[45vh] border-solid border-cyan-500 border-2 rounded-2xl bg-gray-500">
              <p className="pb-2 text-white">Do you want visit us?</p>
              <button className="mr-4">Yes</button>
              <button onClick={() => setLogin(false)}>No</button>
            </div>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header;
