import React from "react";
import { useSelector } from "react-redux";

function Total() {
  const cart = useSelector((state) => state.cart);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <p>
      Total ({getTotal().totalQuantity} items) :{" "}
      <strong className="text-success">${getTotal().totalPrice.toFixed(2)}</strong>
    </p>
  );
}

export default Total;
