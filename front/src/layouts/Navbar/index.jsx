import React, { useState } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleNavbar() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <NavLink to={"/"}>
            <img
              src="https://preview.colorlib.com/theme/aranoz/img/logo.png"
              alt=""
            />
          </NavLink>
        </div>
        <div className="menu">
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/addPage"}>Add Page</NavLink>
            </li>
            <li>
              <NavLink to={"/basket"}>Basket</NavLink>
            </li>
            <li>
              <NavLink to={"/wishlist"}>Wishlist</NavLink>
            </li>
          </ul>
        </div>
      </div>


      <div className="resNavbar">
        <div className="row">
        <div className="logo">
          <NavLink to={"/"}>
            <img
              src="https://preview.colorlib.com/theme/aranoz/img/logo.png"
              alt=""
            />
          </NavLink>
        </div>
        <div className="bars" onClick={toggleNavbar}>
        <i className="fa-solid fa-bars"></i>
        </div>
        </div>
        <div className={`resMenu ${ isOpen ? "open" : ""} `}>
        <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/addPage"}>Add Page</NavLink>
            </li>
            <li>
              <NavLink to={"/basket"}>Basket</NavLink>
            </li>
            <li>
              <NavLink to={"/wishlist"}>Wishlist</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
