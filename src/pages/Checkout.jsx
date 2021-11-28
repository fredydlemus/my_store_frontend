import React from "react";
import "../styles/PageOrder.scss";

export const Checkout = () => {
  return (
    <div className="page-order">
      <div className="container">
        <h1 className="title">My order</h1>
        <div className="content">
          <div className="order">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560,00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
