import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Bubble1 from "../../assets/images/bubble2-upRight.svg";
import ChevronDown from "../../assets/images/chevron-down.svg";

export default function Nav() {
  return (
    <div className="container">
      <div className="nav">
        <input type="checkbox" className="nav__toggle" id="hamburger" hidden />
        <div className="nav__logo">
          <img src={Bubble1} alt="" />
          <h2>Suds Laundary</h2>
        </div>
        <label htmlFor="hamburger">
          <GiHamburgerMenu className="nav__hamburger" />
        </label>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/How it works">How it works</Link>
          </li>
          <li>
            <Link to="/services">
              Services <img src={ChevronDown} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/location">Locations</Link>
          </li>
          <li>
            <Link to="/contact us">Contact us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
