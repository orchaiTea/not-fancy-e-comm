import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart, emptyCart } from "../../features/cart/cartSlice";
import CartBox from "./CartBox";
import Alert from "../Alert";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [checkoutMsg, setCheckoutMsg] = React.useState(false);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const removeItem = (item) => {
    dispatch(removeItemFromCart(item));
  };

  const handleCheckout = () => {
    dispatch(emptyCart());
    setCheckoutMsg(true);
  };

  return (
    <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
      {cartItems.length > 0 ? (
        <div>
          <h2 className="text-3xl font-bold">Shopping Cart</h2>
          <p className="mt-3 text-sm font-medium text-gray-700">
            Checkout the items in your cart to make them happy.
          </p>
        </div>
      ) : (
        <div>
          {" "}
          <h2 className="text-3xl font-bold text-center">Empty Cart ....</h2>
          <p className="mt-3 text-sm font-medium text-gray-700 text-center">
            Add item to your cart.
          </p>
        </div>
      )}

      <ul className="flex flex-col divide-y divide-gray-200">
        {cartItems?.map((item) => (
          <CartBox
            key={item.id}
            item={item}
            onRemove={() => removeItem(item)}
          />
        ))}
      </ul>
      {cartItems.length > 0 && (
        <div>
          <div className="space-y-1 text-right py-2">
            <p>
              Total amount:
              <span className="font-semibold"> ${totalPrice.toFixed(2)}</span>
            </p>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              onClick={handleCheckout}
              type="button"
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black hover:text-white hover:bg-green-500 active:bg-green-700"
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      {checkoutMsg && (
        <Alert bgColor={`bg-yellow-600`} onClose={() => setCheckoutMsg(false)}>
          Order Placed! Thank You for Shopping with Us.
        </Alert>
      )}
    </div>
  );
}
