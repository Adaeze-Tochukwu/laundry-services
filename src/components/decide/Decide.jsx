import React from "react";
import "./Decide.scss";
import DecideImage from "../../assets/images/decide-image.svg";

export default function Decide() {
  return (
    <div className="contained">
      <div className="decide">
        <img src={DecideImage} alt="" />
        <div className="decide__best">
          <h2>Hard time deciding what’s best for you?</h2>
          <div className="decide__best--btn">Learn more</div>
        </div>
      </div>
    </div>
  );
}
