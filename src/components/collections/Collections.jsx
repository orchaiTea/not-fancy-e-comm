import React from "react";
import bgImg from "../../img/lpi.jpg?url";

function Collections() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="flex flex-row-reverse grid grid-cols-3">
        <div
          className="order-last col-span-2"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundPosition: "right",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            height: "88vh",
          }}
        />
        <div className="flex items-center grid-rows-2">
          <h2 className="items-center px-4 py-3 leading-8 font-normal text-xl">
            Discover endless possibilities with our curated collection of
            premium products - where style meets substance.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Collections;
