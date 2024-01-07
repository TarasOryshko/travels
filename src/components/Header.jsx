import React from "react";
import search from "../svg/search.svg";
import logo from "../svg/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="headerFlex" style={{ justifyContent: "space-between" }}>
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="headerFlex">
          <nav className="headerFlex" style={{ alignItems: "center" }}>
            <li>
              <Link to="/">Додому</Link>
            </li>
            <li>
              <Link to="/travels">Подорожі</Link>
            </li>
            <li>
              <Link to="/hotels">Готелі</Link>
            </li>
            <li>
              <Link to="/countries">Країни</Link>
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
            <button>Увійти</button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header;
