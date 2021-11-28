import React from "react";
import "../styles/Header.scss";
import "../styles/components/Logo.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <img src="/" alt="menu" className="menu" />
        <div className="navbar-left">
          <img src="/" alt="logo" className="logo-header" />
          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Clothes</a>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Furnitures</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>
        <div className="navbar-rigth">
          <ul>
            <li className="navbar-email">fredyflemus@gmail.com</li>
            <li className="navbar-shopping-cart">
              <img src="/" alt="shopping cart" />
              <div>2</div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
