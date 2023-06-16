import React from "react";
import "./Sizes.scss";
import Fam from "../../../public/images/size-family.svg";
import Checked from "../../../public/images/checked.svg";

export default function Family() {
  return (
    <div>
      <div className="card">
        <div className="card__up">
          <div className="card__up--size">
            <img src={Fam} alt="" />
            <div>
              <h2>FAMILY SIZE</h2>
              <h6>Perfect for families size 4-6</h6>
            </div>
          </div>
          <h3>What's included</h3>
          <ul>
            <li>
              <img src={Checked} alt="" />
              <h5>6 loads per week</h5>
            </li>
            <li>
              <img src={Checked} alt="" />
              <h5>up to 15 lbs per load</h5>
            </li>
            <li>
              <img src={Checked} alt="" />
              <h5>Special garments</h5>
            </li>
            <li>
              <img src={Checked} alt="" />
              <h5>Pickup & drop off</h5>
            </li>
            <li>
              <img src={Checked} alt="" />
              <h5>Free detergent samples</h5>
            </li>
          </ul>
        </div>
        <div className="card__down">
          <h1>
            30 dollars <span>/per month</span>
          </h1>
          <div className="card__down--btn">Choose</div>
        </div>
      </div>
    </div>
  );
}
