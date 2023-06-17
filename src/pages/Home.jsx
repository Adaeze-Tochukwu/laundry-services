import React from "react";
import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import Steps from "../components/steps/Steps";
import Services from "../components/services/Services";
import Decide from "../components/decide/Decide";
import Footer from "../components/footer/Footer";
import FooterComponent from "../components/footer/FooterComponent";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Steps />
      <Services />
      <Decide />
      <Footer />
      <FooterComponent />
    </div>
  );
}
