import React, { useState, useEffect } from "react";
import "./Steps.scss";
import data from "../steps/Steps.json";
import Heading from "../heading/Heading";

export default function Steps() {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    setSteps(data);
  }, []);

  return (
    <div className='steps'>
      <Heading service="How it works" includes="Get it done in 4 steps" />
      <div className="steps__cards">
        {steps.map((step) => (
          <div key={step.id} className="steps__cards--card">
            <h4>{step.step}</h4>
            <h3>{step.duty}</h3>
            <img src={step.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
