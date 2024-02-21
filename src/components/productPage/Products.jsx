import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../features/cart/cartSlice";
import FancyAlert from "../FancyAlert";

export default function Products() {
  const data = useLoaderData();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(data[currentIndex]?.price);
  const [initialPrice, setInitialPrice] = useState(data[currentIndex]?.price);
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleAddToCart = (item) => {
    const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);
    if (isItemInCart) {
      setShowAlert(true);
      console.log("clicked");
    } else {
      dispatch(addItemToCart(item));
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);
    }
  };

  const onNextClick = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
    setCount(1);
    setInitialPrice(data[nextIndex]?.price);
    setPrice(data[nextIndex]?.price);
    console.log(`On Next Click: ${data[currentIndex]?.id}`);
  };

  useEffect(() => {
    setPrice(data[currentIndex]?.price);
  }, [currentIndex, data]);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    setPrice(initialPrice * (count + 1));
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
      setPrice(initialPrice * (count - 1));
    }
  };

  return (
    <div>
      <section className="overflow-hidden">
        <div className="mx-auto max-w-5xl px-5 py-24">
          {data[currentIndex] ? (
            <div
              key={data[currentIndex]?.id}
              className="mx-auto flex flex-wrap items-center lg:w-4/5 pb-8"
            >
              <img
                alt=""
                className="h-64 w-full rounded-lg object-cover lg:h-96 lg:w-1/2 object-scale-down"
                src={data[currentIndex]?.image}
              />

              <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
                <h1 className="my-4 text-3xl font-semibold text-black">
                  {data[currentIndex]?.title}
                </h1>
                <p className="leading-relaxed">
                  {data[currentIndex]?.description}
                </p>
                <div className="mb-5 mt-6 flex justify-between items-center border-b-2 border-gray-100 pb-5">
                  <div className="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
                    <button
                      onClick={handleIncrement}
                      className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                    >
                      +
                    </button>
                    <span className="duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24">
                      {count}
                    </span>
                    <button
                      onClick={handleDecrement}
                      className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                    >
                      -
                    </button>
                  </div>
                  <div className="title-font text-xl font-bold text-gray-900">
                    $ {price}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    className="bg-black text-white hover:bg-black/80"
                    onClick={() => {
                      handleAddToCart(data[currentIndex]);
                    }}
                  >
                    Add to Cart
                  </Button>
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    onClick={onNextClick}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <h1>Sorry! Looks like Something went wrong.</h1>
          )}
        </div>
        {showAlert && (
          <FancyAlert
            message="Item is already added in the cart."
            onClose={() => setShowAlert(false)}
          />
        )}
        {showSuccessMessage && (
          <FancyAlert
            message="Item is added to the cart."
            onClose={() => setShowSuccessMessage(false)}
          />
        )}
      </section>
    </div>
  );
}
