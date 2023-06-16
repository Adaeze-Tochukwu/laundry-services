import React from "react";
import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import Steps from "../components/steps/Steps";
import Services from "../components/services/Services";
import Single from "../components/sizes/Single";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Steps />
      <Services />
    </div>
  );
}
