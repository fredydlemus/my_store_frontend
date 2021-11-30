import React from "react";
import "../styles/components/ProductItem.scss";
import { IoBagAddSharp } from "react-icons/io5";

const ProductItem = ({ product }) => {
  const [cart, setCart] = React.useState([]);

  const handleClick = () => {
    setCart([]);
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={handleClick}>
          <IoBagAddSharp size="34px" color="#0c038d" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
