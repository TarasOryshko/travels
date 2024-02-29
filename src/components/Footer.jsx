import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/svg/logo.svg";
import facebook from "../assets/svg/facebook.svg";
import youtube from "../assets/svg/youtube.svg";
import instagram from "../assets/svg/instagram.svg";
import verified from "../assets/svg/verified.svg";
import masterCard from "../assets/svg/masterCard.svg";
import mir from "../assets/svg/mir 2.svg";

function Footer() {
  return (
    <div>
      <section className="flex between">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex" style={{ gap: 10 }}>
          <Link>Готелі</Link>
          <Link>Авіаквитки</Link>
          <Link>Про компанію</Link>
        </div>
      </section>
      <section className="flex between" style={{ padding: "40px 0" }}>
        <div>
          <h3>Україна</h3>
          <p>+38 (066) 111 11 11</p>
          <p>some@gmail.com</p>
        </div>
        <div>
          <h3>Англія</h3>
          <p>+38 (066) 111 11 11</p>
          <p>second@gmail.com</p>
        </div>
        <div>
          <h2>Ми у соцмережах</h2>
          <div className="flex between">
            <Link>
              <img src={facebook} alt="facebook" />
            </Link>
            <Link>
              <img src={youtube} alt="youtube" />
            </Link>
            <Link>
              <img src={instagram} alt="instagram" />
            </Link>
          </div>
        </div>
      </section>
      <section className="flex between">
        <div>
          <h4 style={{ color: "#777а" }}>Курс на 06.11.2023</h4>
        </div>
        <article className="flex gap currency">
          <div className="flex gap">
            <p>UA/USD</p>
            <p>38,00</p>
          </div>
          <div className="flex gap">
            <p>UA/EUR</p>
            <p>40,00</p>
          </div>
        </article>
        <article className="flex gap between">
          <div>
            <Link>
              <img src={verified} alt="verified" />
            </Link>
          </div>
          <div>
            <Link>
              <img src={masterCard} alt="masterCard" />
            </Link>
          </div>
          <div>
            <Link>
              <img src={mir} alt="mir" />
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Footer;
