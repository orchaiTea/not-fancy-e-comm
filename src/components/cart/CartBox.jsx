import React from "react";

function CartBox({ item, onRemove, onIncrement }) {
  return (
    <li
      key={item.id}
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
            </div>

            <div className="text-right">
              <p className="text-lg font-semibold">${item.price}</p>
            </div>
          </div>
          <div className="flex divide-x text-sm">
            <button
              onClick={onRemove}
              type="button"
              className="flex items-center rounded-lg space-x-2 px-2 py-1 pl-0 hover:text-red-600 active:bg-red-600 active:text-white"
            >
              <i className="fa-solid fa-trash px-2"></i>
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartBox;
