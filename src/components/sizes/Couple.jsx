import React from "react";
import "./couple.scss";
import Coupl from "../../../public/images/size-couple.svg";
import Checked from "../../../public/images/checked.svg";

export default function Couple() {
  return (
    <div className="couple">
      <div className="couple__up">
        <div className="couple__up--size">
          <img src={Coupl} alt="" />
          <div>
            <h2>COUPLE SIZE</h2>
            <h6>Perfect for couples size 3-6</h6>
          </div>
        </div>
        <h3>What's included</h3>
        <ul>
          <li>
            <img src={Checked} alt="" />
            <h5>4 loads per week</h5>
          </li>
          <li>
            <img src={Checked} alt="" />
            <h5>up to 12 lbs per load</h5>
          </li>
          <li>
            <img src={Checked} alt="" />
            <h5>Special garments</h5>
          </li>
          <li>
            <img src={Checked} alt="" />
            <h5>Pickup & drop off</h5>
          </li>
        </ul>
      </div>
      <div className="couple__down">
        <h1>
          20 dollars <span>/per month</span>
        </h1>
        <div className="couple__down--btn">Choose</div>
      </div>
    </div>
  );
}
