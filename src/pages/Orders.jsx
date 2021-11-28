import React from "react";
import "../styles/PageOrder.scss";
import OrderItem from "../components/OrderItem";

const Orders = () => {
  return (
    <div className="Orders">
      <div className="Order-container">
        <h1 className="title">My orders</h1>
        <div className="Orders-content">
          <OrderItem />
        </div>
      </div>
    </div>
  );
};

export default Orders;
