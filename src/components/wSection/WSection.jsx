import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";

export default function WSection() {
  const data = useLoaderData();
  return (
    <div>
      <section className="overflow-hidden">
        <div className="mx-auto max-w-5xl px-5 py-24">
          {data.map((product) => (
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
                  <div className="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
                    <button className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12">
                      +
                    </button>
                    <span className="duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24">
                      1
                    </span>
                    <button className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12">
                      -
                    </button>
                  </div>
                  <div className="title-font text-xl font-bold text-gray-900">
                    ${product.price}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export const WSectionInfoLoader = async () => {
  try {
    const res = await axios.get(
      "https://fakestoreapi.com/products/category/women's clothing"
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
