import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "../../features/cart/cartSlice";
import CartBox from "./CartBox";
import Alert from "../Alert";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [checkoutMsg, setCheckoutMsg] = React.useState(false);

  const removeItem = (item) => {
    dispatch(removeItemFromCart(item));
    console.log(item);
  };

  const handleCheckout = () => {
    setCheckoutMsg(true);
  };

  return (
    <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
      <h2 className="text-3xl font-bold">Shopping Cart</h2>
      <p className="mt-3 text-sm font-medium text-gray-700">
        Checkout the items in your cart to make them happy.
      </p>
      <ul className="flex flex-col divide-y divide-gray-200">
        {cartItems?.map((item, index) => (
          <CartBox
            index={index}
            item={item}
            onRemove={() => removeItem(item)}
            onCheckout={handleCheckout}
          />
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
          onClick={handleCheckout}
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:text-white hover:bg-green-500"
        >
          Checkout
        </button>
      </div>
      {checkoutMsg && (
        <Alert
          children={"Order Placed! Thank You for Shopping with Us."}
          onClose={() => setCheckoutMsg(false)}
        />
      )}
    </div>
  );
}
