import React from "react";
import bgImg from "../../img/lpi.jpg?url";
import "../../App.css";

function Home() {
  return (
    <div className="container">
      <img
        src={bgImg}
        className="img-container object-cover h-screen w-screen"
      />
      <div className="menu pl-1 py-2">
        <p className="tag-line leading-9 text-pretty text-xl font-medium py-5 pl-5">
          <span className="underline decoration-pink-500 tex-xl">Discover</span>{" "}
          endless possibilities with our curated collection of premium products
          - where style meets substance.
        </p>
      </div>
    </div>
  );
}

export default Home;
