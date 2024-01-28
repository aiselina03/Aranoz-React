import React from "react";
import "./style.scss";
function Footer() {
  return (
    <div className="footer">
      <div className="foot1">
        <div className="products">
          <h3>Top Products</h3>
          <ul>
            <li>Managed Website</li>
            <li>Manage Reputation</li>
            <li>Power Tools</li>
            <li>Marketing Service</li>
          </ul>
        </div>
        <div className="products">
          <h3>Quick Links</h3>
          <ul>
            <li>Brand Assets</li>
            <li>Manage Reputation</li>
            <li>PBrand Assets</li>
            <li>Marketing Service</li>
          </ul>
        </div>
        <div className="products">
          <h3>Features</h3>
          <ul>
            <li>Terms of Service</li>
            <li>Manage Reputation</li>
            <li>Terms of Service</li>
            <li>Marketing Service</li>
          </ul>
        </div>
        <div className="products">
          <h3>Resources</h3>
          <ul>
            <li>Guides</li>
            <li>Manage Reputation</li>
            <li>Power Tools</li>
            <li>Guides</li>
          </ul>
        </div>
      </div>
      <div className="foot2">
        <p>
          Copyright ©2024 All rights reserved | This template is made with by
          Colorlib
        </p>
        <div className="icons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
