import React from "react";
import "./Footer.scss";

export default function FooterComponent(props) {
  const { name, list1, list2, list3, list4 } = props;

  return (
    <div className="footerComponent">
      <h2>{name}</h2>
      <ul>
        <li>{list1} </li>
        <li>{list2}</li>
        <li>{list3}</li>
        <li>{list4}</li>
      </ul>
    </div>
  );
}
