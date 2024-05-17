import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Customized with {greeting.title}
        </p>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          <a href="https://github.com/ashutosh1919/masterPortfolio/">
            هذه نسخة من مستودع تجده في هذا الرابط
          </a>
        </p>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          اللهم انصر غزة وأهلها ، اللهم أعز الإسلام والمسلمين يا رب وحد كلمتهم
          وارفع رايتهم وأنصرهم يا ذا القوةِ المتين.
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
