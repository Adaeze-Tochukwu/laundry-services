import React from "react";
import "./Hero.scss";
import WashingMachine from "../../assets/images/machine.svg";
import WashingMachineMobile from "../../assets/images/washing-machine-mobile.svg";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__left">
        <h5>20% Discount for 1 Month Subscription</h5>
        <h1>Laundry today or Naked tomorrow.</h1>
        <p>
          Suds Laundry service will wash, dry, and fold your laundry at an
          affordable price. Pickup and drop-off options available!
        </p>
        <div className="hero__left--btn">How it works</div>
        <div className="hero__left--years">
          <div className="hero__left--years-happy">
            <h2>18m+</h2>
            <span>Happy Customers</span>
          </div>
          <div className="hero__left--years-happy">
            <h2>10+</h2>
            <span>Years of Experience</span>
          </div>
        </div>
      </div>
      <div className="hero__right">
        <img src={WashingMachine} alt="" className="hero__right--desktop" />
        <img
          src={WashingMachineMobile}
          alt=""
          className="hero__right--mobile"
        />
      </div>
    </div>
  );
}
