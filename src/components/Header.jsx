import React from "react";
import "../styles/Header.scss";
import "../styles/components/Logo.scss";
import { AiOutlineShop, AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./Menu";

const Header = () => {
  const [toggle, setToggle] = React.useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <GiHamburgerMenu color="black" size="30px" className="menu" />

        <div className="navbar-left">
          <AiOutlineShop className="logo-header" color="white" size="44px" />
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
            <li className="navbar-email" onClick={handleToggle}>
              fredyflemus@gmail.com
            </li>
            <li className="navbar-shopping-cart">
              <AiOutlineShoppingCart color="white" size="30px" />
              <div>2</div>
            </li>
          </ul>
        </div>
        {toggle && <Menu />}
      </nav>
    </header>
  );
};

export default Header;
