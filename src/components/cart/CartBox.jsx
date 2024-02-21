import React from "react";

function CartBox({ index, item, removeItem }) {
  return (
    <div>
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
                <p className="text-sm">{`${index}`}</p>

                <div className="min-w-24 flex">
                  <button type="button" className="h-7 w-7" onClick={""}>
                    -
                  </button>
                  <input
                    type="text"
                    className="mx-1 h-7 w-9 rounded-md border text-center"
                    defaultValue={item.rating.count}
                  />
                  <button
                    type="button"
                    className="flex h-7 w-7 items-center justify-center"
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
                onClick={removeItem}
                type="button"
                className="flex items-center space-x-2 px-2 py-1 pl-0 hover:text-red-600 active:bg-red-600 active:text-white"
              >
                <i class="fa-solid fa-trash px-2"></i>
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}

export default CartBox;
