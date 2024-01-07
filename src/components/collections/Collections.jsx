import React from "react";
import background from "../../img/lpi.jpg?url";

function Collections() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div
        className="h-full"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "right",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "88vh",
        }}
      />
    </div>
  );
}

export default Collections;
