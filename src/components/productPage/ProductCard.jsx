import React from "react";
import Button from "../Button";

const ProductCard = ({ product, onAddToCart, onNextClick, price }) => {
  return (
    <div
      key={product.id}
      className="mx-auto flex flex-wrap items-center lg:w-4/5 pb-8"
    >
      <img
        alt=""
        className="h-64 w-full rounded-lg object-cover lg:h-96 lg:w-1/2 object-scale-down"
        src={product.image}
      />

      <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
        <h1 className="my-4 text-3xl font-semibold text-black">
          {product.title}
        </h1>
        <p className="leading-relaxed">{product.description}</p>
        <div className="mb-5 mt-6 flex justify-between items-center border-b-2 border-gray-100 pb-5">
          <div className="title-font text-xl font-bold text-gray-900">
            $ {price}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Button
            className="bg-black text-white hover:bg-black/80 active-color-"
            onClick={onAddToCart}
          >
            Add to Cart
          </Button>
          <button
            onClick={onNextClick}
            className="px-4 py-2 text-medium font-medium rounded-full
            bg-zinc-500 hover:bg-zinc-700 text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
