import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ id, name, description }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    console.log(state.cart.data);
    return (
      state.cart.data.find((item) => item.productId === id) || { count: 0 }
    );
  });

  return (
    <div
      data-cy={`product-${id}`}
      style={{
        border: "2px dotted black",
        borderRadius: "1rem",
        padding: "1.8rem",
        minWidth: "220px",
      }}
    >
      <h3 data-cy="product-name">{name}</h3>
      <h6 data-cy="product-description">{description}</h6>
        <button data-cy="product-add-item-to-cart-button" >
          Add To Cart
        </button>
    </div>
  );
};

export default Product;
