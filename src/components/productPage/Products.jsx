import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../features/cart/cartSlice";
import Alert from "../Alert";
import ProductCard from "./ProductCard";

export default function Products() {
  const data = useLoaderData();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [price, setPrice] = useState(data[currentIndex]?.price);
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleAddToCart = (item) => {
    const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);
    if (isItemInCart) {
      setShowAlert(true);
    } else {
      dispatch(addItemToCart(item));
      setShowSuccessMessage(true);
    }
  };

  const onNextClick = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
    setPrice(data[nextIndex]?.price);
  };

  useEffect(() => {
    setPrice(data[currentIndex]?.price);
  }, [currentIndex, data]);

  return (
    <div>
      {showAlert && (
        <Alert
          bgColor={`bg-red-600`}
          children="Already in Cart."
          onClose={() => setShowAlert(false)}
        />
      )}
      {showSuccessMessage && (
        <Alert
          bgColor={`bg-green-600`}
          children="Successfully added."
          onClose={() => setShowSuccessMessage(false)}
        />
      )}
      <section className="overflow-hidden">
        <div className="mx-auto max-w-5xl px-5 py-24">
          {data[currentIndex] ? (
            <ProductCard
              product={data[currentIndex]}
              onAddToCart={() => handleAddToCart(data[currentIndex])}
              onNextClick={onNextClick}
              price={price}
            />
          ) : (
            <h1>Sorry! Looks like Something went wrong.</h1>
          )}
        </div>
      </section>
    </div>
  );
}
