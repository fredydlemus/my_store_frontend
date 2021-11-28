import React from "react";
import ProductInfo from "../components/ProductInfo";

const ProductDetail = () => {
  return (
    <aside className="ProductDetail">
      <div className="ProductDetail-close">
        <img src="/" alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
