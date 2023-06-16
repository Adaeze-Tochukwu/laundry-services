import React from "react";
import "./Services.scss";
import Heading from "../heading/Heading";
import Single from "../sizes/Single";
import Couple from '../sizes/Couple';
import Family from '../sizes/Family';

export default function Services() {
  return (
    <div className="services">
      <Heading service="Services" includes="Services & Packages" />
      <div className="services__sizes">
        <Single />
        <Couple />
        <Family />
      </div>
    </div>
  );
}
