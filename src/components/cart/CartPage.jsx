import React from "react";
import { useSelector } from "react-redux";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <h1>Cart is Empty</h1>
      <ul>
        {cartItems?.map((item, index) => (
          <li key={index}>
            {item.id}, {item.title}, {item.price}, {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
