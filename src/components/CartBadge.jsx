import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartBadge = ({ link, className = "" }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const [totalUniqueItems, setTotalUniqueItems] = useState(0);

  useEffect(() => {
    const uniqueItems = new Set(cartItems.map((item) => item.id));
    setTotalUniqueItems(uniqueItems.size);
  }, [cartItems]);

  return (
    <Link to={link} className={`relative ${className}`}>
      <i className="fa-solid fa-cart-shopping pl-3"></i>
      {totalUniqueItems > 0 && (
        <div className="absolute top-0 right-0 left-8 flex items-center justify-center w-4 h-4 bg-red-500 text-white rounded-full text-xs">
          {totalUniqueItems}
        </div>
      )}
    </Link>
  );
};

export default CartBadge;
