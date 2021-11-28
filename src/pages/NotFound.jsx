import React from "react";
import "../styles/NotFound.scss";
import { AiOutlineShop } from "react-icons/ai";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-container">
        <AiOutlineShop className="logo" color="black" size="75px" />
        <h1>Error 404</h1>
        <h3>Page not Founded</h3>
        <h5>D:</h5>
      </div>
    </div>
  );
};

export default NotFound;
