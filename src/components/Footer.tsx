import React from "react";
import "./Footer.scss";
import Line from "./Global/Line";

export default function Footer() {
  return (
    <div
      className="footerContainer"
      style={{ background: "$primary" }}
      data-cursor-exclusion
    >
      <Line />
      <div className="footer">
        <div className="logo">
          <p>Mateo Leal - Web Debeloper & UI/UX Designer</p>
        </div>
        <div className="contactMe">
          <div className="row">
            <h3>Socials</h3>
            <p>Instagram</p>
            <p>Github</p>
            <p>LinkedIn</p>
          </div>
          <div className="row"></div>
          <div className="row"></div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2023 Mateo Leal. All rights reserved.</p>
      </div>
    </div>
  );
}
