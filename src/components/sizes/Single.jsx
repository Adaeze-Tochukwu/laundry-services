import React from "react";
import "./Sizes.scss";
import Singl from "../../../public/images/size-single.svg";
import Checked from "../../../public/images/checked.svg";

export default function Single() {
  return (
    <div>
      <div className="card">
        <div className="card__up">
          <div className="card__up--size">
            <img src={Singl} alt="" />
            <div>
              <h2>SINGLE SIZE</h2>
              <h6>Perfect for people who live alone</h6>
            </div>
          </div>
          <h3>What's included</h3>
          <ul>
            <li>
              <img src={Checked} alt="" />
              <h5>2 loads per week</h5>
            </li>
            <li>
              <img src={Checked} alt="" />
              <h5>up to 10 lbs per load</h5>
            </li>
          </ul>
        </div>
        <div className="card__down">
          <h1>
            10 dollars <span>/per month</span>
          </h1>
          <div className="card__down--btn">Choose</div>
        </div>
      </div>
    </div>
  );
}
