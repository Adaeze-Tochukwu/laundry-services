import React from "react";
import "./Footer.scss";
import FooterComponent from "./FooterComponent";
import Facebook from "../../assets/images/facebook.svg";
import Instagram from "../../assets/images/instagram.svg";
import Linkedin from "../../assets/images/linkedin.svg";

export default function Footer() {
  return (
    <div className='container'>
      <div className="footer">
        <h3>Suds Laundry</h3>
        <div className="footer__component">
          <FooterComponent
            name="About us"
            list1="About us"
            list2="Creators"
            list3="Philosophy"
            list4="Contact us"
          />
          <FooterComponent
            name="Company"
            list1="Our team"
            list2="Terms"
            list3="How it works"
            list4="Blog"
          />
          <FooterComponent
            name="Services"
            list1="Pickup"
            list2="Drop off"
            list3="Laundry"
          />
          <div>
            <FooterComponent name="Check us out" />
            <div className="footer__component--img">
              <img src={Facebook} alt="" />
              <img src={Instagram} alt="" />
              <img src={Linkedin} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
