import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "../../features/cart/cartSlice";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const removeItem = (item) => {
    dispatch(removeItemFromCart(item));
    console.log(item);
  };

  return (
    <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
      <h2 className="text-3xl font-bold">Shopping Cart</h2>
      <p className="mt-3 text-sm font-medium text-gray-700">
        Checkout the items in your cart to make them happy.
      </p>
      <ul className="flex flex-col divide-y divide-gray-200">
        {cartItems?.map((item, index) => (
          <li
            key={index}
            className="flex flex-col py-6 sm:flex-row sm:justify-between"
          >
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                src={item.image}
                alt="Products Image."
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                      {item.title}
                    </h3>
                    <p className="text-sm">{"No such thing"}</p>

                    <div className="min-w-24 flex">
                      <button type="button" className="h-7 w-7" onClick="">
                        -
                      </button>
                      <input
                        type="text"
                        className="mx-1 h-7 w-9 rounded-md border text-center"
                        defaultValue={1}
                        // value={count}
                      />
                      <button
                        type="button"
                        className="flex h-7 w-7 items-center justify-center"
                        onClick=""
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-semibold">${item.price}</p>
                  </div>
                </div>
                <div className="flex divide-x text-sm">
                  <button
                    onClick={() => removeItem(item)}
                    type="button"
                    className="flex items-center space-x-2 px-2 py-1 pl-0"
                  >
                    {/* <Trash size={16} /> */}
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="space-y-1 text-right">
        <p>
          Total amount:
          <span className="font-semibold"> ₹48,967</span>
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          onClick={() => {
            alert("Under construction! Please try after you get a job.");
          }}
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:text-white hover:bg-green-500"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
