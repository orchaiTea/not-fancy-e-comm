import React from "react";
import bgImg from "../../img/lpi.jpg?url";
import "../../App.css";

function Home() {
  return (
    <div className="container">
      <div
        className="img-container"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="menu px-3 py-2">
        <p className="tag-line leading-9 text-pretty text-lg font-medium">
          <span className="underline decoration-pink-500">Discover</span>{" "}
          endless possibilities with our curated collection of premium products
          - where style meets substance.
        </p>
      </div>
    </div>
  );
}

export default Home;
